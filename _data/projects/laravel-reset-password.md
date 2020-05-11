---
template: projects
path: /portfolio/laravel-reset-password/
date: 2020-02-25
title: Laravel Reset Password
category: PortFolio
thumbnail: /assets/projects/laravel-reset-password.png
metaDescription: Laravel Reset Password Bangla
---

লারাভেলে প্যাকেজ রিভিউ সিরিজে আমি আজকে [laravel-reset-password](https://github.com/IANirab/laravel-reset-password) প্যাকেজটির কথা বলবো । এই প্যাকেজটি ব্যাবহার করে আপনার ওয়েবসাইটের ইউজার-রা তাদের পাসওয়ার্ডটি রিসেট করতে পারবে । এই প্যাকেজটি ব্যাবহার করতে গেলে প্রথমে ইউজারদের ইনপুট হিসাবে তাদের ইমেইল দিতে হবে । ঐ ইমেইলে কোন অ্যাকাউন্ট আছে কি না , সেটি আগে চেক করা হয় । যদি থাকে তাহলে ইউজারদের ইমেইলে একটি নতুন পাসওয়ার্ড সেন্ড করে দেওয়া হয় , সেই সাথে পুরনো পাসওয়ার্ডটি ডিলিট হয়ে যাবে ।

## যেভাবে প্যাকেজটি ইন্সটল করবেন :

প্যাকেজটি ইন্সটল করার জন্য প্রথমে আপনার প্রোজেক্ট লোকেশানসহ টার্মিনালটি ওপেন করুন । এরপর নিচের কমান্ডটি ব্যাবহার করুন :

```bash
composer require nirab/reset-password
```

প্যাকেজটি ইন্সটল হতে কিছু সময় লাগতে পারে ।

এরপর আপনার প্রোজেক্টে `config` ফোল্ডারে থাকা `app.php` ফাইলটি ওপেন করুন এবং `providers` অ্যারে’র ভিতরে নিচের লাইনটি যুক্ত করুন :

```php
nirab\resetpassword\ResetPasswordServiceProvider::class,
```

এখন আবার প্রোজেক্ট লোকেশানসহ টার্মিনাল ওপেন করে নিচের কমান্ডটি ব্যাবহার করুন :

```bash
php artisan vendor:publish --provider="nirab\resetpassword\ResetPasswordServiceProvider::class"
```

`.env` ফাইলটি ওপেন করে মেইল এবং ডাটাবেসটি সেটআপ করুন ।

## যেভাবে প্যাকেজটি ব্যাবহার করবেন :

প্যাকেজটি ব্যাবহার করতে হলে আপনার কন্ট্রোলারের উপরে নিচের লাইনটি যুক্ত করতে হবে :

```php
use nirab\resetpassword\Models\UserResetPassword;
```

এরপর ,

```php
$resetpassword = new UserResetPassword();
echo $resetpassword->SendMail($email);
```

এখানে ,
`$email` হল ইউজারদের ইনপুটকৃত ইমেইল ।

### কন্ট্রোলারসহ সম্পূর্ণ উদাহারন :

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use nirab\resetpassword\Models\UserResetPassword;

class forgetpassController extends Controller
{
    public function reset(Request $request)
    {
        $email = $request->email;
        $resetpassword = new UserResetPassword();
        $msg = $resetpassword->SendMail($email);
        return redirect()->back()->with('message',$msg);
    }
}
```

## যেভাবে প্যাকেজটি কাস্টমাইজ করবেন :

প্যাকেজটি ইন্সটল করার পর আপনি আপনার প্রোজেক্ট এ `config` ফোল্ডারের ভিতরে `resetpassword.php` নামে একটি ফাইল দেখতে পারবেন । ফাইলটি ওপেন করলে ,

```php
<?php

return [
    'msgSuccess' => 'A New Password Has Been Send to your Email !!',
    'msgError' => 'Email is not registered !!',
    'address' => 'mygmail@gmail.com',
    'name' => 'Reset Your Password :: Mysite.com'
];
```

### ইমেইল টেম্পলেট :

`views` ফোল্ডারের ভিতরে `vendor/email/email.blade.php` লোকেশানে ইমেইল টেম্পলেট রয়েছে ।

```php
<!DOCTYPE html>
<html>
<head>
	<title>Forget Password</title>
</head>
<body>
<h3>Hi,</h3>
Your New Password is {{$password}}
<br>
<hr>
<small>Please Go Back & Change Your Password as Fast as Possiable !!</small>
</body>
</html>
```

এখানে ,

`$password` ভেরিয়েবলটি ইউজারদের জন্য আপডেটকৃত নতুন পাসওয়ার্ড বহন করে ।

পোস্টটি সম্পূর্ণ পড়ার জন্য অসংখ্য `ধন্যবাদ`
