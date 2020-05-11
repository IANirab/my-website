---
template: BlogPost
path: /post/uses-of-array_column-function/
date: 2020-02-24
title: Uses of array_column function
category: Php
thumbnail: /assets/php/array-change-key-case.jpg
metaDescription: Uses of array_column function Bangla
---

পিএইচপিতে একটি বিল্ডইন ফাংশন হল `array_column()`

এই ফাংশনটি ব্যাবহার করে একটি মাল্টিডাইমেন্সন অ্যারে’র একটি নির্দিষ্ট কী’র ভেলুসমূহ নিয়ে একটি নতুন অ্যারে গঠন করা যায় ।

ফাংশনটিতে ৩টি প্যারামিটার আছে । যার মাঝে ২-টি ব্যাবহার করা বাধ্যতামূলক ।

**input** : যে মাল্টিডাইমেন্সন অ্যারে থেকে ভেলু নিবেন ।

**column_key** : index র যে কী’র ভেলু নিবেন ।

**index_key** : নতুন অ্যারে ‘র কী হিসাবে যদি `index` র কোন কী দিতে চান । এটি ব্যাবহার করা বাধ্যতামূলক নয় ।

উদাহারন-১ :

```php
<?php

$records = array(
    array(
        'id' => 2135,
        'first_name' => 'John',
        'last_name' => 'Doe',
    ),
    array(
        'id' => 3245,
        'first_name' => 'Sally',
        'last_name' => 'Smith',
    ),
    array(
        'id' => 5342,
        'first_name' => 'Jane',
        'last_name' => 'Jones',
    ),
    array(
        'id' => 5623,
        'first_name' => 'Peter',
        'last_name' => 'Doe',
    )
);

$first_names = array_column($records, 'first_name');
print_r($first_names);
?>
```

রেজাল্ট :

```php
Array
(
    [0] => John
    [1] => Sally
    [2] => Jane
    [3] => Peter
)
```

`index_key` ব্যাবহার করলে ,

উদাহারন-২ :

```php
<?php

$records = array(
    array(
        'id' => 2135,
        'first_name' => 'John',
        'last_name' => 'Doe',
    ),
    array(
        'id' => 3245,
        'first_name' => 'Sally',
        'last_name' => 'Smith',
    ),
    array(
        'id' => 5342,
        'first_name' => 'Jane',
        'last_name' => 'Jones',
    ),
    array(
        'id' => 5623,
        'first_name' => 'Peter',
        'last_name' => 'Doe',
    )
);

$last_names = array_column($records, 'last_name', 'id');
print_r($last_names);
?>
```

রেজাল্ট :

```php
Array
(
    [2135] => Doe
    [3245] => Smith
    [5342] => Jones
    [5623] => Doe
)
```

Source Link : https://www.php.net/manual/en/function.array-column.php

`ধন্যবাদ`
