---
template: BlogPost
path: /post/uses-of-array_chunk-function/
date: 2020-02-25
title: Uses of array_chunk function
category: Php
thumbnail: /assets/php/array-chunk.jpg
metaDescription: Uses of array_chunk function Bangla
---

পিএইচপিতে একটি বিল্ডইন ফাংশন হল `array_chunk()`

এই ফাংশনটি ব্যাবহার করে অ্যারেসমূহের ভেলুগুলো নিয়ে এক অথবা একাধিক নতুন অ্যারে গঠন করা হয় । সাধারণত এই ফাংশনটির ৩-টি প্যারামিটার থাকে । কিন্তুু ২-টি ব্যাবহার করা বাধ্যতামূলক ।

যথাঃ

`array` – [ যে অ্যারে থেকে ভেলুু নিবেন ]

`size` – [ নতুন অ্যারে সমূহের কী সংখ্যা ]

`preserve_keys` [ এটির ভেলু ডিফল্ট ভাবে `FALSE` থাকে , `TRUE` থাকলে নতুুুন অ্যারে সমূহকে আর একটি নতুন অ্যারে’র ভিতরে স্থাপন করবে ।

উদাহারন-১ :

```php
<?php
    $array = array('a', 'b', 'c', 'd', 'e');
    print_r(array_chunk($array, 6));
?>
```

রেজাল্ট :

```php
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
            [2] => c
            [3] => d
            [4] => e
        )
)
```

উদাহারন-২ :

```php
<?php
    $array = array('a', 'b', 'c', 'd', 'e');
    print_r(array_chunk($array, 2, true));
?>
```

রেজাল্ট :

```php
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [2] => c
            [3] => d
        )

    [2] => Array
        (
            [4] => e
        )

)
```

`ধন্যবাদ`
