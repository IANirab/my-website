---
template: BlogPost
path: /post/how-to-changes-the-case-of-all-keys-in-an-array/
date: 2020-02-23
title: How To Changes the case of all keys in an array
category: Php
thumbnail: /assets/php/change-case-all-key-array.jpg
metaDescription: How To Changes the case of all keys in an array Bangla
---

কিভাবে একটি অ্যারে’র `key` সমূহের `case` পরিবর্তন করা যায় তা করার জন্য পিএইচপিতে আলাদা একটি বিল্ডইন ফাংশন আছে ।

ফাংশনটির নাম :

```php
array_change_key_case()
```

ফাংশনটিতে দুইটি প্যারামিটার থাকবে।

`অ্যারে` – [ যে অ্যারে’র কী সমূহের কেস পরিবর্তন করা হবে ] ,
`কেস টাইপ` – [ এ ক্ষেত্রে ২ টি ভালু থাকবে । যথা: `CASE_UPPER` ও `CASE_LOWER` ]
তবে , ডিফল্টভাবে কেস টাইপ হিসাবে `CASE_LOWER` থাকে ।

উদাহারন :

```php
<?php
    $input_array = array("name" => 'Istiaq Nirab', "Age" => "18+");
    print_r(array_change_key_case($input_array, CASE_UPPER));
?>
```

রেজাল্ট :

```php
Array
(
    [NAME] => Istiaq Nirab
    [AGE] => 18+
)
```

`ধন্যবাদ`
