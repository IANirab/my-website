---
template: BlogPost
path: /post/পিএইচপি-array-combine-ফাংশনের-ব্যাবহ/
date: 2020-02-22
title: পিএইচপি array_combine ফাংশনের ব্যাবহার
category: Php
thumbnail: /assets/php/array-combine.jpg
metaDescription: পিএইচপি array_combine ফাংশনের ব্যাবহার
---

পিএইচপিতে অন্যতম একটি বিল্ডইন ফাংশন হল `array_combine`

এই ফাংশনটি ব্যাবহার করে ১টি অ্যারে থেকে কী ও অপর অ্যারে থেকে ভেলু নিয়ে নতুন একটি অ্যারে গঠন করা হয় ।

ফাংশনটিতে ২-টি প্যারামিটার থাকবে । যথা :

**keys** – যে অ্যারে’র ভেলু কী হিসাবে ব্যাবহার করতে চাচ্ছেন ।

**values** – যে আরে’র ভেলুসমূহ ভেলু হিসাবে ব্যাবহার করতে চাচ্ছেন ।

উদাহারন :

```php
<?php
    $a = array('green', 'red', 'yellow');
    $b = array('avocado', 'apple', 'banana');
    $c = array_combine($a, $b);

    print_r($c);
?>
```

রেজাল্ট :

```php
Array
(
    [green]  => avocado
    [red]    => apple
    [yellow] => banana

)
```

`ধন্যবাদ`
