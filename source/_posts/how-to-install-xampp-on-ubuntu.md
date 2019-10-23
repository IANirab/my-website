---
extends: _layouts.post
section: content
title: How to install Xampp on Ubuntu
date: 2019-10-12
description: কিভাবে আপনার উবুন্টু পিসিতে xampp ইন্সটল করবেন তা নিচে দেওয়া হল ,আপনার পিসিতে পিএইচপি প্রোগ্রাম রান করার জন্য অবশ্যই একটি লোকাল সার্ভার লাগবে ।
cover_image: /assets/images/how-to-install-xampp-on-ubuntu.png
categories: [linux,ubuntu]
---

কিভাবে আপনার উবুন্টু পিসিতে **xampp** ইন্সটল করবেন তা নিচে দেওয়া হল :
আপনার পিসিতে পিএইচপি প্রোগ্রাম রান করার জন্য অবশ্যই একটি লোকাল সার্ভার লাগবে । লোকাল সার্ভার হিসাবে **xampp** খুবই জনপ্রিয় একটি সফটওয়্যার । **xampp** ইন্সটল করার জন্য প্রথমে নিচের লিঙ্কে গিয়ে সফটওয়্যারটি ডাউনলোড করতে হবে ।

[Download Link](https://www.apachefriends.org/download.html)

সফটওয়্যারটির ফাইল টাইপ বা এক্সটেনশন সম্ভবত **run** হবে । এরপর ফাইলটি যে ফোল্ডার এ সেভ হয়েছে , সেই ফোল্ডার এ যান এবং রাইট ক্লিক করে **Open in Terminal** সিলেক্ট করে টার্মিনালটি ওই ফোল্ডারের অধীনে ওপেন হবে । এরপর নিচের কমান্ডটি ব্যাবহার করতে হবে । এই কমান্ডটি ব্যাবহারের ফলে ফাইলটির **permission** পরিবর্তন হবে ।

```
chmod 755 [package_name]
```

এখানে, **package_name** হবে আপনার ফাইলের নাম ।

উদাহারন :

```
chmod 755 xampp-linux-x64-7.3.5-1-installer.run
```

এরপর ,

```bash
sudo ./[package_name]
```

উদাহারন :

```
sudo ./xampp-linux-x64-7.3.5-1-installer.run
```

এখন সফটওয়্যারটি ইন্সটল করার জন্য একটি উইন্ডো ওপেন হবে ।

![image](/assets/images/install-xampp-1.png)

এখন next বাটনে প্রেস করুন এবং নিচের স্টেপগুলো ফলো করুন :

![image](/assets/images/install-xampp-2.png)

![image](/assets/images/install-xampp-3.png)

![image](/assets/images/install-xampp-4.png)

![image](/assets/images/install-xampp-5.png)

![image](/assets/images/install-xampp-6.png)

![image](/assets/images/install-xampp-7.png)

xampp ইন্সটল করা হয়ে গেছে ।

সার্ভার স্টার্ট ও স্টপ করার জন্য নিচের কমান্ডগুলো ব্যাবহার করতে হবে ।

```bash
sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp stop
```

সার্ভার চালু হয়েছে কি না তা চেক করার জন্য ব্রাউজারে নিচের লিঙ্কে যান :

http://localhost

ধন্যবাদ ।