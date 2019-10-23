---
extends: _layouts.post
section: content
title: Laravel Mail Editor Package Bangla
date: 2019-10-13
description: লারাভেলে প্যাকেজ রিভিউ সিরিজে আমি আজকে  Mail Editor Package প্যাকেজটির কথা বলবো  । এই প্যাকেজটি ব্যাবহার করে খুব সহজেই আপনি আপনার সাইটের জন্য কম্যান্ড লাইন ছাড়া মেইল ও সুন্দর সুন্দর মেইল টেম্পলেট বানাতে পারবেন
cover_image: /assets/images/laravel-mail-editor-package-bangla.png
categories: [laravel]
---

লারাভেলে প্যাকেজ রিভিউ সিরিজে আমি আজকে [Mail Editor Package](https://github.com/Qoraiche/laravel-mail-editor) প্যাকেজটির কথা বলবো  । এই প্যাকেজটি ব্যাবহার করে খুব সহজেই আপনি আপনার সাইটের জন্য কম্যান্ড লাইন ছাড়া মেইল ও সুন্দর সুন্দর মেইল টেম্পলেট বানাতে পারবেন ।

![image](/assets/images/laravel-mail-package-1.png)

### যেভাবে প্যাকেজটি ইন্সটল করবেন :

প্যাকেজটি ইন্সটল করার জন্য প্রথমে আপনার প্রোজেক্ট লোকেশানসহ টার্মিনালটি ওপেন করুন । এরপর নিচের কমান্ড দুইটি ব্যাবহার করুন :

```bash
composer require qoraiche/laravel-mail-editor
```

এরপর ,

```bash
php artisan vendor:publish --provider="qoraiche\mailEclipse\mailEclipseServiceProvider" 
```

### যেভাবে প্যাকেজটি ব্যাবহার করবেন :

প্যাকেজটি ইন্সটল করার পর একটি ফ্রন্টইন ড্যাশবোর্ড হয় , যেখানে আপনি মেইল টেম্পলেট বানাতে পারবেন ।

আপনার প্রোজেক্ট **url** এর সাথে **/mailEclipse** যুক্ত করলেই সেই ড্যাশবোর্ডটি অ্যাক্সেস করতে পারবেন ।

উদাহারন : http://localhost:8000/mailEclipse

ড্যাশবোর্ডটি এইরকম হবে :

![image](/assets/images/laravel-mail-package-1.png)

এখান থেকে আপনি চাইলে এখান থেকে মেইল এবং মেইল টেম্পলেট বানাতে পারবেন ।

বিস্তারিত জানতে নিচের ভিডিওটি দেখুন :

<iframe width="750" height="422" src="https://www.youtube.com/embed/QFgEGNBY3FI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ধন্যবাদ ।