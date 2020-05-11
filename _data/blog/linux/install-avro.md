---
template: BlogPost
path: /post/how-to-install-avro-keyboard-on-ubuntu/
date: 2020-02-21
title: How To Install Avro Keyboard on Ubuntu
category: Linux
thumbnail: /assets/linux/avro-install-main.jpg
metaDescription: How To Install Avro Keyboard on Ubuntu Bangla
---

কিভাবে অভ্র কিবোর্ড উবুন্টুতে ইন্সটল করবেন । কম্পিউটারে বাংলা টাইপিংর জন্য জন্য বর্তমানে সবচেয়ে জনপ্রিয় সফটওয়্যার হচ্ছে অভ্র কিবোর্ড ।

অভ্র ইন্সটল করার জন্য প্রথমে আপনি `Language Support` অপশনে যান । এরপর `install/remove languages` এ ক্লিক করুন ।

![alt text](/assets/linux/avro-install-1.png "sceenshot 1")

এরপর বাংলা সিলেক্ট করে `apply` করুন ,

![alt text](/assets/linux/avro-install-2.png "sceenshot 2")

কিছু সময় ধের্যসহকারে অপেক্ষা করুন ,

![alt text](/assets/linux/avro-install-3.png "sceenshot 3")

এখন নিচের লিঙ্কে গিয়ে অভ্র ডেবিয়ান প্যাকেজটি ডাউনলোড করুন ।

https://github.com/maateen/avro/releases

এরপর প্যাকেজটি ইন্সটল করার জন্য টার্মিনালটি ওপেন করে নিচের কম্যান্ডটি ব্যাবহার করতে হবেঃ

```bash
sudo dpkg -i YOUR_FULL_FILE_NAME
```

এরপর কিছু ইরর মেসেজ আসবে । যার আপনাকে নিচের কমান্ডটি ব্যাবহার করতে হবে :

```bash
sudo apt-get install -f
```

```bash
ibus restart
```

এখন `Settings > Region and language` এ গিয়ে **Add an input source** এ ক্লিক করুন , এরপর `Bangla` সিলেক্ট করে আবার **Bengali (Avro Phonetic)** সিলেক্ট করুন ।

![alt text](/assets/linux/avro-install-4.png "sceenshot 4")

এখন আপনি আপনার ডেস্কটপের টপবার থেকে ল্যাঙ্গুয়েজ পরিবর্তন করতে পারবেন ।

![alt text](/assets/linux/avro-install-5.png "sceenshot 5")

`ধন্যবাদ`
