---
image: /assets/images/contact-bg.jpg
title: Contact Me
subtitle: Have questions? I have answers.
---

@extends('_layouts.page')

@section('content')
    <p>You can contact us via <a href="https://web.facebook.com/istiaq.nirab.1" title="Facebook Profile" target="_blank">Facebook</a> , <a href="https://twitter.com/AhmmedNirab" title="Twitter Profile" target="_blank">Twitter</a> , <a href="https://github.com/IANirab" title="Github Profile" target="_blank">Github</a> .</p>
    <form method="POST" action="https://formspree.io/xbnaybax">
        <div class="control-group">
            <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" name="name" id="name" required>
            </div>
        </div>
        <div class="control-group">
            <div class="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="Email Address" name="email" id="email" required>
            </div>
        </div>
        <div class="control-group">
            <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" class="form-control" placeholder="Message" name="message" id="message" required></textarea>
            </div>
        </div>
        <br>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Send</button>
        </div>
        <input type="text" name="_gotcha" style="display:none" />
    </form>
@endsection