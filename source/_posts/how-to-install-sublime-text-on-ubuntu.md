---
extends: _layouts.post
section: content
title: How to install sublime text on ubuntu
date: 2019-10-12
description: কিভাবে আপনি আপনার উবুন্টু ডেস্কটপে sublime text ইন্সটল করবেন । sublime text ইন্সটল করার জন্য আপনাকে প্রথমে টার্মিনালটী ওপেন করতে হবে ।
cover_image: /assets/images/how-to-install-sublime-text-on-ubuntu.png
categories: [linux,ubuntu]
---

কিভাবে আপনি আপনার উবুন্টু ডেস্কটপে sublime text ইন্সটল করবেন ।

**sublime text** ইন্সটল করার জন্য আপনাকে প্রথমে টার্মিনালটী ওপেন করতে হবে । এরপর নিচের কমান্ডটি টাইপ করুনঃ

```bash
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```

এরপর,

```bash
sudo apt-get install apt-transport-https
```

```bash
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```

সর্বশেষে ,

```bash
sudo apt-get update
sudo apt-get install sublime-text
```

ধন্যবাদ