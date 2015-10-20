---
layout: post
title: Objective-c wildcard property listener
date: 2015-10-20 13:40:00 +0000
summary: Listening for property changes on all properties in a class
---
Adding listeners to all properties in a class is useful for when trying to create a data model base class and properly handle manipulation of attributes on the model within the base class.

We are going to use KVO on the base class in Objective-c for all properties to observe the properties. We are going to have to use an interesting work around to get this to work. What I mean is that you are going to have to retrieve all the properties as an array then loop through them and individually assign a KVO listener to each property.

```objectivec
unsigned int count;
objc_property_t *properties = class_copyPropertyList([self class], &count);
for (size_t i = 0; i < count; ++i) {
  NSString *key = [NSString stringWithCString:property_getName(properties[i])];
  [self addObserver:self forKeyPath:key, options:options, context:context];
}
```

Then we can react to changes by simply adding the following method to our class and react to them as we would normally do in the KVO pattern.
```objectivec
- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *);
```

In order for all of this to work we are going to need to import the following header file `<objc/objc-runtime.h>` or else the compiler will complain about the type `objc_property_t` not existing.
