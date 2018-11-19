#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n tv.appmakers.app/host.exp.exponent.MainActivity
