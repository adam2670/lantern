/* scan.js — the class page's camera scanner, and the only file in Odyssey that opens a camera.
 *
 * WHY IT IS ITS OWN FILE. class.html fetches this only outside the app, on a secure page, when
 * the page loads. The iOS app bundle (app/Scripts/copy_kit.sh) never carries it, nor qr-decode.js
 * which it fetches in turn, so the app holds no camera code at all — the answer given to Apple for
 * the Kids Category. On the web nothing changed: the same button, the same two readers, the same
 * honest note where a camera cannot be used, and pasting always works.
 *
 * WHAT IT NEEDS FROM THE PAGE. class.html leaves window.__odysseyClass = {ingest, kids, render}
 * before this file is fetched; the scanner feeds each code it reads through ingest exactly as a
 * pasted code goes. Nothing here reaches the network except fetching qr-decode.js from this same
 * folder when the browser has no reader of its own.
 */
// The decoder (qr-decode.js, jsQR) is fetched only when a scan starts in a browser that has no
// reader of its own. The app never turns a camera on, so the app bundle does not carry it at all.
function loadDecoder(){
  return new Promise(function(res, rej){
    if(window.jsQR) return res();
    var s=document.createElement('script'); s.src='qr-decode.js';
    s.onload=function(){ window.jsQR ? res() : rej(new Error('no reader')); };
    s.onerror=function(){ rej(new Error('no reader')); };
    document.head.appendChild(s);
  });
}
  // ---------------- the camera, and only here ----------------
  // The Monday-morning problem: twenty-two children on a cart of laptops, and typing twenty-two
  // long codes by hand is what makes this page a demo rather than a tool. So the teacher presses
  // one button, walks the row, and the camera reads the square off each screen.
  //
  // Reading happens twice over, because one way is not enough. Where the browser has its own code
  // reader (BarcodeDetector: Chrome and Edge on Android, Windows and Mac) that is used, because it
  // is the operating system's and it is fast. Where it does not, the page reads the frames itself
  // with the decoder in qr-decode.js.
  //
  // Why the second way had to be built. The first version drew the button only where
  // BarcodeDetector existed. Tested on an iPhone in Safari, that came out as no button at all,
  // only the sentence saying the browser could not — and the teacher's phone is the entire point
  // of the feature. No version of Safari has BarcodeDetector, and every browser on iOS is Safari
  // underneath, so on an iPhone or an iPad there was never going to be a button. There is now.
  //
  // What decides whether the button is drawn is the camera, not the reader: getUserMedia, on a
  // secure page. iOS Safari has had getUserMedia for years, and the site is https. The button
  // stays hidden in exactly three cases — no getUserMedia, a page that is not secure (a camera is
  // not offered on a plain http page and the browser would refuse anyway), and inside the app,
  // where a Kids Category binary has no business opening a camera at all. The last two are decided
  // by class.html before this file is fetched; the app never fetches it.
  //
  // The rules that do not change. The camera lives on the teacher's page and nowhere else:
  // nothing in the child's game ever opens one. It opens only when she presses the button, and the
  // browser asks her permission on top of that. Every frame is looked at here and dropped — the
  // fallback draws the frame into a canvas that is never added to the page, reads it, and wipes it
  // on the spot; nothing is uploaded, nothing is written down, and a scanned code is held in
  // exactly the same place as a pasted one, which is a variable that dies with the tab. Pasting
  // and dropping are untouched and remain the way in on every browser.
  (function(){
    const btn=document.getElementById('scanBtn'), note=document.getElementById('scanNote'),
          box=document.getElementById('scanBox'), video=document.getElementById('scanVideo'),
          flash=document.getElementById('scanFlash'), stop=document.getElementById('scanStop'),
          smsg=document.getElementById('scanMsg');
    // This file is only ever loaded outside the app, on a secure page (class.html checks both before
    // fetching it). What is decided here is whether the device has a camera to offer.
    const C=window.__odysseyClass; if(!C) return;      // the page's own state: reports, ingest, render
    const kids=C.kids, ingest=C.ingest, render=C.render;
    const hasCamera = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    if(!hasCamera){
      note.hidden=false;
      // Nothing here names a browser to go and install. On an iPhone every browser is the same
      // engine, so "try another browser" would be advice that cannot work, and a teacher who
      // followed it would have wasted her morning. Say what is true and point at what always works.
      note.textContent='This browser cannot use the camera here. Pasting a code, or dropping in the files parents sent, works everywhere and is right here above.';
      return;
    }
    btn.hidden=false;
    // A child's screen stays in front of the camera for several seconds, so the same square is
    // read again and again. This remembers the squares already taken so the count means children
    // scanned rather than frames looked at. It is a variable like every other on this page: it
    // dies with the tab and is never written down.
    let stream=null, detector=null, timer=null, scanned=0; const seen={};
    // The canvas the fallback reads through. Made once, never put in the page, wiped after every
    // frame and thrown away when the camera stops.
    let canvas=null, cctx=null;
    function flashOk(){ flash.classList.add('on'); setTimeout(()=>flash.classList.remove('on'),120); }

    // Read one frame the slow way: draw the video into a canvas at a modest size — a QR square
    // filling a phone's viewfinder is perfectly readable at 480 pixels, and a smaller picture is
    // the difference between a phone that keeps up and one that heats up — hand the pixels to the
    // decoder, then wipe the canvas. attemptBoth is deliberate: a child on a dark-mode screen shows
    // a light square on black, which is the inverse of what a printed code looks like.
    function readFrameHere(){
      const vw=video.videoWidth, vh=video.videoHeight;
      if(!vw || !vh) return [];
      const decode = window.OdysseyQRDecode || window.jsQR;
      if(!decode) return [];
      const k=Math.min(1, 480/Math.max(vw,vh));
      const w=Math.max(1,Math.round(vw*k)), h=Math.max(1,Math.round(vh*k));
      if(!canvas){ canvas=document.createElement('canvas'); cctx=canvas.getContext('2d',{willReadFrequently:true}); }
      if(canvas.width!==w || canvas.height!==h){ canvas.width=w; canvas.height=h; }
      let out=[];
      try{
        cctx.drawImage(video,0,0,w,h);
        const img=cctx.getImageData(0,0,w,h);
        const r=decode(img.data,w,h,{inversionAttempts:'attemptBoth'});
        if(r && r.data) out=[{rawValue:r.data}];
      }catch(e){ out=[]; }
      try{ cctx.clearRect(0,0,w,h); }catch(e){}   // the frame is gone before the next one arrives
      return out;
    }

    async function tick(){
      if(!stream) return;
      try{
        const found = detector ? await detector.detect(video) : readFrameHere();
        for(const b of found){
          const t=String(b.rawValue||'');
          if(!/ODYSSEY[12]\./.test(t) || seen[t]) continue;
          const before=Object.keys(kids).length;
          const r=ingest(t);
          if(!r.n) continue;
          seen[t]=true; scanned++; render(); flashOk();
          const now=Object.keys(kids).length;
          // A second code for a callsign already here replaces the older one, which is what
          // ingest already does. Say so, or a teacher watching the count sit still will scan again.
          smsg.textContent=scanned+' scanned. '+now+' in the class'+(now===before? ' (that one replaced a code already here)' : '')+'.';
        }
      }catch(e){ /* a frame that cannot be read is simply the next frame's problem */ }
      // The browser's own reader is cheap enough to run four times a second. Reading the frame
      // here costs real work on the phone's one thread, so it gets a longer gap: still three
      // times a second, which is far faster than a teacher can move from desk to desk.
      timer=setTimeout(tick, detector? 250 : 300);
    }

    async function start(){
      try{
        // The fast path, where the browser brings its own reader. If it is absent or cannot do QR,
        // detector stays null and every frame goes through qr-decode.js instead.
        detector=null;
        if('BarcodeDetector' in window){
          try{
            const fmts=await BarcodeDetector.getSupportedFormats();
            if(fmts.indexOf('qr_code')>=0) detector=new BarcodeDetector({formats:['qr_code']});
          }catch(e){ detector=null; }
        }
        if(!detector){ await loadDecoder(); }
        if(!detector && !(window.OdysseyQRDecode || window.jsQR)) throw new Error('no reader');
        stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
        // The box is opened BEFORE the video is played. iOS Safari will not start a video that is
        // inside a hidden element, and the old order — play, then unhide — is what a phone would
        // have failed on even once the button appeared.
        box.hidden=false; btn.hidden=true;
        video.muted=true; video.setAttribute('playsinline','');
        video.srcObject=stream; await video.play();
        smsg.textContent='Camera on. Point it at a child’s screen.';
        note.hidden=true;
        stop.focus();
        tick();
      }catch(e){
        if(stream){ try{ stream.getTracks().forEach(t=>t.stop()); }catch(_){} }
        stream=null; box.hidden=true; btn.hidden=false; note.hidden=false;
        note.textContent = (e && e.name==='NotAllowedError')
          ? 'The camera was not allowed. Turn it on for this page in the browser’s settings, or paste the codes instead.'
          : 'The camera could not be started on this device. Pasting a code, or dropping in the files parents sent, works everywhere.';
      }
    }
    function end(){
      if(timer){ clearTimeout(timer); timer=null; }
      if(stream){ stream.getTracks().forEach(t=>t.stop()); stream=null; }
      video.srcObject=null; box.hidden=true; btn.hidden=false;
      // Let go of the canvas too: shrinking it to nothing frees the last frame's pixels rather
      // than leaving them sitting in memory until the tab is closed.
      if(canvas){ try{ cctx.clearRect(0,0,canvas.width,canvas.height); canvas.width=canvas.height=0; }catch(e){} canvas=null; cctx=null; }
      document.getElementById('msg').textContent = scanned? `${scanned} scanned. ${Object.keys(kids).length} in the class.` : 'Camera off.';
      btn.focus();
    }
    btn.onclick=start; stop.onclick=end;
    document.addEventListener('keydown', e=>{ if(e.key==='Escape' && stream) end(); });
    window.addEventListener('pagehide', end);          // the camera never outlives the page
    // A handle for testing, in the same spirit as __odysseyClass at the foot of this file: it lets
    // a test drive the scanner and ask which of the two readers is running. It opens nothing on its
    // own — readFrameHere returns an empty list when there is no camera — and the page itself never
    // uses it.
    window.__odysseyScan={ start, end, readFrameHere, get on(){ return !!stream; }, get mode(){ return detector? 'browser' : 'vendored'; } };
  })();
