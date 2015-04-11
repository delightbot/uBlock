<a href = "https://chrismatic.io/ublock/">
<img  src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/img/gh-header.png"
      height="64">
</a>

[**uBlock**](https://chrismatic.io/ublock/): 여러 브라우저를 위한 차단기 확장기능입니다. 빠르고, 강력하며, 가볍습니다.

[![빌드 상태](https://travis-ci.org/chrisaljoudi/uBlock.svg?branch=master)](https://travis-ci.org/chrisaljoudi/uBlock) [![개발 지원](https://chrismatic.io/oncedonate.svg)](https://chrismatic.io/donate)


* [uBlock이란?](#uBlock이란?)
* [시작하기](#시작하기)
* [성능 및 벤치마크](#성능 및 벤치마크)
* [릴리즈 내역](#릴리즈 내역)
* [팁](#팁)
* [위키](https://github.com/chrisaljoudi/uBlock/wiki)

## uBlock이란?

uBlock 은 범용 차단기 애드온입니다.— 구체적으로 *ad blocker* 는 아닙니다.

uBlock 은 [Adblock Plus filter syntax](https://adblockplus.org/en/filters)를 통해 광고를 차단합니다. uBlock은 구문을 [확장](https://github.com/chrisaljoudi/uBlock/wiki/Filter-syntax-extensions)하고 사용자 정의 규칙 및 필터 사용이 가능하도록 설계되었습니다.

uBlock의 주 목표는 사용자가 개인정보 침해 장치를 무력화시키는 것을 돕는 것입니다. — 광고도 그 예중 하나입니다.

## 시작하기

[기본 사용법에 대한 빠른 가이드](https://github.com/chrisaljoudi/uBlock/wiki/Quick-guide:-popup-user-interface).

#### 설치:

* **사파리**: [이 홈페이지](https://chrismatic.io/ublock/safari/)에서 다운로드 하거나, [사파리 확장기능 갤러리](https://extensions.apple.com/details/?id=net.chrisaljoudi.uBlock-96G4BAKDQ9)에서 다운로드 하실 수 있습니다.

* **크롬**: [크롬 웹스토어](https://chrome.google.com/webstore/detail/ublock/epcnnfbjfcgphgdmggkamkmgojdagdnn)에서 다운로드 하거나, [직접 내려받는 형식](https://github.com/chrisaljoudi/uBlock/tree/master/dist#install)으로 다운로드 하실 수 있습니다.

* **오페라**: [오페라 스토어](https://addons.opera.com/en-gb/extensions/details/ublock/)에서 다운로드 하실 수 있습니다.

* **파이어폭스**: [파이어폭스 애드온 홈페이지](https://addons.mozilla.org/en-US/firefox/addon/ublock/)에서 다운로드 하거나, [직접 내려받는 형식](https://github.com/chrisaljoudi/uBlock/releases)으로 다운로드 하실 수 있습니다.

 * 모질라의 검토과정으로 인하여 파이어폭스 애드온 홈페이지의 uBlock이 자주 구형 버전이 될 수 있습니다. 이것은 개발자의 제어권한에서 제외됩니다.

## 성능

#### Memory

<div align="center">
평균치로 볼 때, uBlock은 <b>확실히</b> 당신의 브라우저를 가볍게 만들어줍니다.
<sup>[1]</sup><br><br>

크로미움 <sup>[2]</sup><br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/mem-usage-overall-chart-20141224.png" /><br><br>

파이어폭스<br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/mem-usage-overall-chart-20150205.png" /><br><br>

사파리<br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/mem-usage-overall-chart-safari-20150205.png" /><br><br>

</div>

<sup>[1] 자세한 벤치마크 정보는 <a href="https://github.com/chrisaljoudi/uBlock/wiki/Firefox-version:-benchmarking-memory-footprint">파이어폭스 버전: 메모리 사용량 벤치마크</a> 에서 확인하실 수 있습니다.</sup><br>

<sup>[2] Important note: There is currently a [bug in Chromium 39+ which causes a new memory leak each time the popup UI of an extension is opened](https://code.google.com/p/chromium/issues/detail?id=441500). This affects <i>all</i> extensions. Keep this in mind when measuring Chromium's memory usage. In the benchmarks, I avoided opening the popups completely.</sup><br>

#### CPU

<p align="center">
uBlock is also easy on the CPU<br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/cpu-usage-overall-chart-20141226.png" /><br>
<sup>Details of the benchmark available in <a href="https://github.com/chrisaljoudi/uBlock/blob/master/doc/benchmarks/cpu-usage-overall-20141226.ods">this LibreOffice spreadsheet</a>.</sup>
</p>

#### Blocking

<p align="center">
Being lean and efficient doesn't mean blocking less<br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/privex-201502-16.png" /><br>
<sup>For details of benchmark, see 
<a href="https://github.com/chrisaljoudi/uBlock/wiki/uBlock-and-others%3A-Blocking-ads%2C-trackers%2C-malwares">uBlock and others: Blocking ads, trackers, malwares</a>.
</p>

#### Quick tests

- [Index](http://raymondhill.net/ublock/tests.html)
- [Web page components](http://raymondhill.net/ublock/tiles1.html)
- [Popups](http://raymondhill.net/ublock/popup.html)

## Release History

See the [releases pages](https://github.com/chrisaljoudi/uBlock/releases) for a history of releases and highlights for each release.

## Tips

* **To benefit from uBlock's higher efficiency,** it's advised that you don't use other inefficient blockers at the same time (such as AdBlock or Adblock Plus). uBlock will do [as well or better](#blocking) than most popular ad blockers.

* It's important to note that blocking ads [is *not* theft](https://twitter.com/LeaVerou/status/518154828166725632). Don't fall for this creepy idea. The _ultimate_ logical consequence of `blocking = theft` is the criminalisation of the inalienable right to privacy.

* _EasyList_, _Peter Lowe's Adservers_, _EasyPrivacy_ and _Malware domains_ are enabled by default when you install uBlock. Many more lists are readily available to block trackers, analytics, and more. Hosts files are also supported.

* Once you install uBlock, you can easily un-select any of the pre-selected filter lists if you think uBlock blocks too much. For reference, Adblock Plus installs with only _EasyList_ enabled by default.

* Feel free to read [about the extension's required permissions](https://github.com/chrisaljoudi/uBlock/wiki/About-the-required-permissions).

## About

[uBlock's manifesto](MANIFESTO.md).

Free. Open source. For users by users.

If uBlock is useful to you, [donations to support development are much appreciated](https://chrismatic.io/ublock/).

uBlock is made useful because of the filter lists it utilizes. We deeply appreciate
the people working hard to maintain the filter lists we're using,
which were made available to use by all for free.

## License

[GPLv3](https://github.com/chrisaljoudi/uBlock/blob/master/LICENSE.txt).
