---
template: BlogPost
path: /post/পিএইচপি-array_count_values-ও-count-ফাংশনের-ব্যা/
date: 2020-03-04
title: পিএইচপি array_count_values ও count ফাংশনের ব্যাবহার
category: Php
thumbnail: /assets/php/array-count.jpg
metaDescription: পিএইচপি array_count_values ও count ফাংশনের ব্যাবহার
---

পিএইচপিতে ২-টি বিল্ডইন ফাংশন হল `array_count_values` ও `count` ।

আজকে এই দুইটি ফাংশনের ব্যাবহার দেখব ।

## array_count_values :

এই ফাংশনটি ব্যাবহার একটি অ্যারেতে একটি ভেলু কয়বার আছে , সেটি নির্ণয় করা যায় ।

### উদাহারন :

```php
<?php
$array = array(1, "hello", 1, "world", "hello");
print_r(array_count_values($array));
?>
```

রেজাল্ট :

```php
Array (
    [1] => 2
    [hello] => 2
    [world] => 1
)
```

## count :

ফাংশনটির নাম শুনেই বোঝা যাচ্ছে , এই ফাংশনটি ব্যাবহার করে একটি অ্যারেতে কয়টি ভেলু আছে , সেটি নির্ণয় করা যায় ।

### উদাহারন :

```php
<?php

$array = array("a" => "green", "b" => "brown", "c" => "blue", "red");
echo count($array);

?>
```

রেজাল্ট :

```
4
```

**ধন্যবাদ**
