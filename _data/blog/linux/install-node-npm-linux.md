---
template: BlogPost
path: /post/how-to-install-node-js-npm-in-ubuntu/
date: 2020-03-03
title: How to Install Node Js & NPM in Ubuntu
category: Linux
thumbnail: /assets/linux/install-npm-node.jpg
metaDescription: How to Install Node Js & NPM in Ubuntu Bangla
---

কিভাবে আপনি আপনার উবুন্টু পিসিতে `Node js` এবং `Npm` ইন্সটল করবেন। `Npm` হল `Node` প্যাকেজ ম্যানেজার । `Node` প্রোগ্রাম ব্যাবহার , ইন্সটল , ডিলিট করতে এটি ব্যাবহার করা হয় । তাছাড়া `Npm` একটি ওপেনসোর্স ডেভেলপমেন্ট সার্ভার দেয় , যেটি ব্যাবহার করে আপনার প্রোজেক্টটি খুব সুন্দরভাবে ডেভেলপ করতে পারবেন । মূলত `vue js` , `react js` সহ জাভাস্ক্রিপ্টের যে সকল ফ্রেমওয়ার্কে CLI আছে , সেগুলার CLI ভার্সন ইন্সটল করতে অবশ্যই `Node js` এবং `Npm` ব্যাবহার করতে হবে ।

## Install Node js & NPM On Ubuntu

`Node js` & `NPM` ইন্সটল করার পূর্বে আপনার সিস্টেমটি আপডেট করে নিন ।

```bash
sudo apt-get update
```

```bash
sudo apt-get upgrade
```

এরপর **PPA(Personal Package Archives)** ইন্সটল করতে হবে ।

```bash
sudo apt-get install python-software-properties
```

```bash
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
```

এখানে , `curl` ব্যাবহারের ফলে যদি কোন ইরর আসে । তাহলে বুজতে হবে , আপনার সিস্টেমে `curl` ইন্সটল করা নেই । `curl` ইন্সটল করার জন্য ,

```bash
sudo apt-get install curl
```

এখন, `Node js` ইন্সটল করার জন্য নিচের কমান্ডটি ব্যাবহার করুন ।

```bash
sudo apt-get install nodejs
```

এবং `NPM` ইন্সটল করার জন্য ,

```bash
sudo apt-get install npm
```

`Node js` & `NPM` ইন্সটল হয়েছে কিনা , সেটি বুঝার জন্য নিচের কমান্ডগুলো ব্যাবহার করুন ,

```bash
nodejs  -v
```

```bash
npm -v
```

এখন থেকে আপনি আপনার ওয়েব অ্যাপ্লিকেশানগুলো `Node js` & `NPM` ব্যাবহার করে ডেভেলপ করতে পারবেন ।

পোস্টটি সম্পূর্ণ পড়ার জন্য অসংখ্য ধন্যবাদ । কোন প্রকার অসুবিধা হলে কমেন্ট করুন ।
