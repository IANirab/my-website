---
template: BlogPost
path: /post/top-php-string-functions-bangla/
date: 2020-03-04
title: Top Php String Functions
category: Php
thumbnail: /assets/php/php-string-functions.jpg
metaDescription: Top Php String Functions Bangla
---

পিএইচপিতে কয়েকটি ক্যারেক্টারের সমন্বয়ে স্ট্রিং গঠিত হয় । সহজভাষাই , ” ” অথবা ‘ ‘ র ভিতরে কোন ডাটা বা ডাটাসমূহ থাকলেই তাকে স্ট্রিং বলে হয় । আমি আজকে অপরিহার্য কিছু স্ট্রিং ফাংশন সম্পর্কে কথা বলবো , যেগুলা রিয়েল লাইফে প্রোজেক্ট করার সময় আপনাকে বারবার ব্যাবহার করতে হবে ।

ফাংশনসমূহ নিম্নরূপ :

- Trim funcition
- Ucfirst function
- Ucwords function
- Strlen function
- Strtolower function
- Strtoupper function
- Lcfirst function
- Str Replace function
- Str Word Count function
- Strrev function
- Strpos function
- Substr function

নিচে বিস্তারিতভাবে সকল ফাংশনসমূহ বর্ণনা করা হল :

## PHP Trim Function

এই ফাংশনটি ব্যাবহার করে স্ট্রিং-এর প্রথম এবং শেষে থাকা স্পেসগুলো রিমুভ করা যায় ।

### উদাহারন :

```php
<?php
    $str = "  Istiaq Nirab  ";
    echo trim($str);
?>
```

রেজাল্ট :

```
Istiaq Nirab
```

## PHP Ucfirst Function

এই ফাংশনটি স্ট্রিং-এর প্রথম ওয়ার্ডের প্রথম ক্যারেক্টারটি `uppercase` এ কনভার্ট করে দেয় ।

### উদাহারন :

```php
<?php
 echo ucfirst("hello world");
?>
```

রেজাল্ট :

```
Hello world
```

## PHP Ucwords Function

এই ফাংশনটি স্ট্রিং-এর প্রতিটি ওয়ার্ডসমূহের প্রথন ক্যারেক্টারটি `uppercase` এ কনভার্ট করে দেয় ।

### উদাহারন :

```php
<?php
    echo ucwords("hello world");
?>
```

রেজাল্ট :

```
Hello World
```

## PHP Strlen Function

একটি স্ট্রিং – এর ভিতরে কতগুলো ক্যারেক্টার আছে সেটি বের করতে এই ফাংশনটি ব্যাবহার করা হয় ।

### উদাহারন :

```php
<?php
echo strlen("Hello World");
?>
```

রেজাল্ট :

```
11
```

## PHP Strtolower Function

এই ফাংশনটি স্ট্রিং-এর প্রতিটি ক্যারেক্টারকে `lowercase` এ কনভার্ট করে দেয় ।

### উদাহারন :

```php
<?php
echo strtolower("ISTIAQ");
?>
```

রেজাল্ট :

```
istiaq
```

## PHP Strtoupper Function

এই ফাংশনটি স্ট্রিং-এর প্রতিটি ক্যারেক্টারকে `uppercase` এ কনভার্ট করে দেয় ।

### উদাহারন :

```php
<?php
echo strtolower("istiaq");
?>
```

রেজাল্ট :

```
ISTIAQ
```

## PHP Lcfirst Function

এই ফাংশনটি শুধু স্ট্রিং-এর প্রথম ক্যারেক্টারকে `lowercase` এ কনভার্ট করে ।

### উদাহারন :

```php
<?php
echo lcfirst("ISTIAQ");
?>
```

রেজাল্ট :

```
iSTIAQ
```

## PHP Str Replace Function

এই ফাংশনটি ব্যাবহার করে স্ট্রিং-এর নির্দিষ্ট একটি ক্যারেক্টারকে পরিবর্তন করা যায় ।

### উদাহারন :

```php
<?php
echo str_replace("nirab","World","Hello nirab!");
?>
```

রেজাল্ট :

```
Hello World
```

## PHP Str Word Count Function

এই ফাংশনটি ব্যাবহার করে স্ট্রিং-এর ভিতর কতগুলো ওয়ার্ড আছে , সেটি নির্ণয় করা হয়।

### উদাহারন :

```php
<?php
echo str_word_count("Hello World");
?>
```

রেজাল্ট :

```
2
```

## PHP Strrev Function

এই ফাংশনটি ব্যাবহার করে একটি স্ট্রিংকে `reverse` করা হয় ।

### উদাহারন :

```php
<?php
echo strrev("Hello");
?>
```

রেজাল্ট :

```
olleh
```

## PHP Strpos Function

এই ফাংশনটি ব্যাবহার করে একটি স্ট্রিং-এর ভিতরে থাকা কোন ওয়ার্ড , শুরু থেকে কত ক্যারেক্টার দূরে – সেটি নির্ণয় করা যায় ।

### উদাহারন :

```php
<?php
echo strpos("Hello World","World");
?>
```

রেজাল্ট :

```
6
```

## PHP Substr Function

যদি আপনি একটি স্ট্রিং-র নির্দিষ্ট কয়েকটি ক্যারেক্টার ডিসপ্লে করতে চান , তাহলে এই ফাংশনটি ব্যাবহার করতে হবে ।

### উদাহারন :

```php
<?php
echo substr("Hello World",0,5);
?>
```

রেজাল্ট :

```
Hello
```

পোস্টটি সম্পূর্ণ পড়ার জন্য অসংখ্য `ধন্যবাদ`
