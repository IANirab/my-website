---
extends: _layouts.post
section: content
title: Uses of array_combine function PHP
date: 2019-10-23
description: এই ফাংশনটি ব্যাবহার করে ১টি অ্যারে থেকে কী ও অপর অ্যারে থেকে ভেলু নিয়ে নতুন একটি অ্যারে গঠন করা হয় ।
categories: [php, php-array]
---

পিএইচপিতে অন্যতম একটি বিল্ডইন ফাংশন হল **array_combine**

এই ফাংশনটি ব্যাবহার করে ১টি অ্যারে থেকে কী ও অপর অ্যারে থেকে ভেলু নিয়ে নতুন একটি অ্যারে গঠন করা হয় ।

ফাংশনটিতে ২-টি প্যারামিটার থাকবে । যথা :

১ । **keys** – যে অ্যারে’র ভেলু কী হিসাবে ব্যাবহার করতে চাচ্ছেন ।

২ । **values** – যে আরে’র ভেলুসমূহ ভেলু হিসাবে ব্যাবহার করতে চাচ্ছেন ।

**উদাহারন :**

```php
<?php
 
$a = array('green', 'red', 'yellow');
$b = array('avocado', 'apple', 'banana');
$c = array_combine($a, $b);
 
print_r($c);
 
?>
```

**রেজাল্ট :**

```
Array
(
    [green]  => avocado
    [red]    => apple
    [yellow] => banana

)
```

ধন্যবাদ ।