'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';

export function SignupPopup(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem('sparkle-signup-seen')) return;
    const timer=window.setTimeout(()=>setOpen(true),10000);
    return()=>window.clearTimeout(timer);
  },[]);
  const close=()=>{sessionStorage.setItem('sparkle-signup-seen','1');setOpen(false)};
  if(!open)return null;
  return <div className="signup-popover" role="dialog" aria-modal="false" aria-labelledby="signup-title">
    <button className="signup-close" onClick={close} aria-label="Close signup">×</button>
    <Image src="/images/crystal-watercolor-rose.png" alt="" width={180} height={230}/>
    <p className="eyebrow">A note from me</p><h2 id="signup-title">Stay connected to the circle.</h2>
    <p>Join me for occasional reflections, upcoming gatherings, and new offerings.</p>
    <form action="https://YOUR-MAILERLITE-FORM-URL" method="post"><label>Name<input name="name" autoComplete="name"/></label><label>Email<input name="email" type="email" autoComplete="email" required/></label><button className="button button-accent" type="submit">Stay Connected</button></form>
  </div>
}
