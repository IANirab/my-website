---
extends: _layouts.post
section: content
title: How To Changes the case of all keys in an array ?
subtitle: array_change_key_case() ফাংশনের ব্যাবহার
excerpt: array_change_key_case() ফাংশনের ব্যাবহার
date: 2019-10-17
description: কিভাবে একটি অ্যারে’র key সমূহের case পরিবর্তন করা যায় তা করার জন্য পিএইচপিতে আলাদা একটি বিল্ডইন ফাংশন আছে । ফাংশনটির নাম হল array_change_key_case()
categories: [php, php-array]
---

কিভাবে একটি অ্যারে’র **key** সমূহের **case** পরিবর্তন করা যায় তা করার জন্য পিএইচপিতে আলাদা একটি বিল্ডইন ফাংশন আছে ।
ফাংশনটির নাম :

```php
array_change_key_case()
```

ফাংশনটিতে দুইটি প্যারামিটার থাকবে।

1. **অ্যারে** – [ যে অ্যারে’র কী সমূহের কেস পরিবর্তন করা হবে ] ,

2. **কেস টাইপ** – [ এ ক্ষেত্রে ২ টি ভালু থাকবে । যথা: `CASE_UPPER` ও `CASE_LOWER` ]

তবে , ডিফল্টভাবে কেস টাইপ হিসাবে `CASE_LOWER` থাকে ।

**উদাহারন :**

```php
<?php
  	$input_array = array("name" => 'Istiaq Nirab', "Age" => "18+");
  	print_r(array_change_key_case($input_array, CASE_UPPER));
?>
```

**রেজাল্ট :**

```php
Array
(
    [NAME] => Istiaq Nirab
    [AGE] => 18+
)
```

ধন্যবাদ ।
