---
template: BlogPost
path: /post/how-to-install-xampp-on-ubuntu/
date: 2020-02-26
title: How to install Xampp on Ubuntu
category: Linux
thumbnail: /assets/linux/install-xampp-main.jpg
metaDescription: How to install Xampp on Ubuntu Bangla
---

কিভাবে আপনার উবুন্টু পিসিতে `xampp` ইন্সটল করবেন তা নিচে দেওয়া হল :
আপনার পিসিতে পিএইচপি প্রোগ্রাম রান করার জন্য অবশ্যই একটি লোকাল সার্ভার লাগবে । লোকাল সার্ভার হিসাবে xampp খুবই জনপ্রিয় একটি সফটওয়্যার । xampp ইন্সটল করার জন্য প্রথমে নিচের লিঙ্কে গিয়ে সফটওয়্যারটি ডাউনলোড করতে হবে ।

https://www.apachefriends.org/download.html

সফটওয়্যারটির ফাইল টাইপ বা এক্সটেনশন সম্ভবত `run` হবে । এরপর ফাইলটি যে ফোল্ডার এ সেভ হয়েছে , সেই ফোল্ডার এ যান এবং রাইট ক্লিক করে **Open in Terminal** সিলেক্ট করে টার্মিনালটি ওই ফোল্ডারের অধীনে ওপেন হবে । এরপর নিচের কমান্ডটি ব্যাবহার করতে হবে । এই কমান্ডটি ব্যাবহারের ফলে ফাইলটির `permission` পরিবর্তন হবে ।

```bash
chmod 755 [package_name]
```

এখানে, `package_name` হবে আপনার ফাইলের নাম ।

উদাহারন :

```bash
chmod 755 xampp-linux-x64-7.3.5-1-installer.run
```

এরপর ,

```bash
sudo ./[package_name]
```

উদাহারন :

```bash
sudo ./xampp-linux-x64-7.3.5-1-installer.run
```

এখন সফটওয়্যারটি ইন্সটল করার জন্য একটি উইন্ডো ওপেন হবে ।

![alt text](/assets/linux/install-xampp-1.png "sceenshot 1")

এখন next বাটনে প্রেস করুন এবং নিচের স্টেপগুলো ফলো করুন :

![alt text](/assets/linux/install-xampp-2.png "sceenshot 2")
![alt text](/assets/linux/install-xampp-3.png "sceenshot 3")
![alt text](/assets/linux/install-xampp-4.png "sceenshot 4")
![alt text](/assets/linux/install-xampp-5.png "sceenshot 5")
![alt text](/assets/linux/install-xampp-6.png "sceenshot 6")
![alt text](/assets/linux/install-xampp-7.png "sceenshot 7")
![alt text](/assets/linux/install-xampp-8.png "sceenshot 8")

xampp ইন্সটল করা হয়ে গেছে ।

সার্ভার স্টার্ট ও স্টপ করার জন্য নিচের কমান্ডগুলো ব্যাবহার করতে হবে ।

```bash
sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp stop
```

সার্ভার চালু হয়েছে কি না তা চেক করার জন্য ব্রাউজারে নিচের লিঙ্কে যান :

http://localhost

ধন্যবাদ ।
