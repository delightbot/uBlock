<a href = "https://chrismatic.io/ublock/">
<img  src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/img/gh-header.png"
      height="64">
</a>

[**uBlock**](https://chrismatic.io/ublock/): 여러 브라우저를 위한 차단기 확장기능입니다. 빠르고, 강력하며, 가볍습니다.

[![빌드 상태](https://travis-ci.org/chrisaljoudi/uBlock.svg?branch=master)](https://travis-ci.org/chrisaljoudi/uBlock) [![개발 지원](https://chrismatic.io/oncedonate.svg)](https://chrismatic.io/donate)


* [uBlock이란?](#uBlock이란)
* [시작하기](#시작하기)
* [성능 및 벤치마크](#성능)
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

#### 메모리

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

<sup>[2] 중요 사항: 현재 여기에는 [크로미움 39+ 기반에서 확장기능이 열려 팝업 UI이 뜰 때마다 메모리 릭이 발생하는 버그](https://code.google.com/p/chromium/issues/detail?id=441500)가 존재합니다. 이것은 <i>모든</i> 확장기능에 영향을 줍니다. 크로미움 기반에서 메모리 사용량을 측정할 때 이 점을 유의해 주십시오. 벤치마크에서, 저는 완전히 팝업을 여는 것을 피했습니다.</sup><br>

#### CPU

<p align="center">
uBlock은 CPU에 부담이 적습니다.<br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/cpu-usage-overall-chart-20141226.png" /><br>
<sup>자세한 벤치마크는 <a href="https://github.com/chrisaljoudi/uBlock/blob/master/doc/benchmarks/cpu-usage-overall-20141226.ods">이 리브레오피스 스프레드시트</a>에서 확인이 가능합니다.</sup>
</p>

#### 차단

<p align="center">
매우 효율적이기 때문에 덜 차단하는 것을 의미하는 것은 아닙니다.<br>
<img src="https://raw.githubusercontent.com/chrisaljoudi/uBlock/master/doc/benchmarks/privex-201502-16.png" /><br>
<sup>자세한 벤치마크는
<a href="https://github.com/chrisaljoudi/uBlock/wiki/uBlock-and-others%3A-Blocking-ads%2C-trackers%2C-malwares">uBlock 그리고 다른 프로그램: 광고 차단, 트래커, 멀웨어</a>에서 확인이 가능합니다.
</p>

#### 빠른 테스트

- [인덱스](http://raymondhill.net/ublock/tests.html)
- [웹 페이지의 구성 요소](http://raymondhill.net/ublock/tiles1.html)
- [팝업](http://raymondhill.net/ublock/popup.html)

## 릴리즈 내역

[릴리즈 페이지](https://github.com/chrisaljoudi/uBlock/releases)에서 릴리즈 내역과 릴리즈에 대한 하이라이트 부분을 볼 수 있습니다.

## 팁

* **uBlock의 높은 효율을 원하신다면,** 동시에 다른 비효율적인 차단기를 사용하지 않는 것을 권장합니다 (예: AdBlock 또는 Adblock Plus). uBlock은 다른 인기있는 광고 차단기보다 [훨씬 더 좋습니다](#blocking).

* 광고를 차단하는 것은 [*절대* 도둑질](https://twitter.com/LeaVerou/status/518154828166725632)이 아니라는 것이 중요한 부분입니다. 이런 오싹한 상상에 빠지지 마세요. _궁극적_인 논리의 결과가 `차단 = 도둑질` 이라면 이는 불가침적인 개인정보 권리에 대한 범죄입니다.

* _EasyList_, _Peter Lowe's Adservers_, _EasyPrivacy_ 와 _Malware domains_ 는 uBlock을 설치할 때 기본적으로 활성화 되어 있습니다. 다른 많은 블록 트래커, 분석 등을 쉽게 사용할 수 있습니다. 호스트 파일도 지원됩니다.

* uBlock을 설치하고, 당신이 생각하기에 uBlock의 차단목록이 너무 많다고 생각되면 쉽게 필터 리스트에서 선택 해제가 가능합니다. 참고로, 애드블록 플러스는 설치시 _EasyList_ 만 기본적으로 활성화되어 있습니다.

* [확장기능의 필요한 권한](https://github.com/chrisaljoudi/uBlock/wiki/About-the-required-permissions)에 대해 읽어 주시기 바랍니다.

## 정보

[uBlock 선언서](MANIFESTO.md).

무료이며, 개방되어 있으며(오픈소스), 사용자를 위해 사용자가 만들었습니다.

uBlock이 당신에게 유용하다고 생각되면, [개발에 지원이 될 수 있도록 많은 기부를 부탁드립니다](https://chrismatic.io/ublock/).

uBlock은 활용하고 있는 필터들 덕분에 유용해집니다. 저희는
우리가 사용중인 필터를 유지하기 위해 노력하는 사람들에게 깊이 감사드립니다.
이는 모두 무료로 사용하게 되어있습니다.

## 라이센스

[GPLv3](https://github.com/chrisaljoudi/uBlock/blob/master/LICENSE.txt).
