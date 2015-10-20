---
layout: post
title: Objective-c
date: 2015-10-20 13:40:00 +0000
summary: Listening for property changes on all properties in a class
---
If you are going to want to use KVO on a class in Objective-c for all properties, your are going to have to use an interesting work around. What I mean is that you are going to have to retrieve all the properties as an array then loop through them and individually assign a KVO listener to each property.

```objective-c
unsigned int count;
objc_property_t *properties = class_copyPropertyList([self class], &count);
for (size_t i = 0; i < count; ++i) {
  NSString *key = [NSString stringWithCString:property_getName(properties[i])];
  [self addObserver:self forKeyPath:key, options:options, context:context];
}
```

Then you can react to changes by simply adding the following method to your class and react to them as you would normally do in the KVO pattern.
```objective-c
- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *);
```

In order for all of this to work you are going to need to import the following header file `<objc/objc-runtime.h>`.

Adding listeners like this is useful for when trying to create a data model base class and properly handle manipulation of attributes on the model within the base class.
