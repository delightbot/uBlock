**중요한 사항:** 이것은 [새 공식 repo](https://github.com/chrisaljoudi/uBlock)의 포크입니다. 이 두 프로젝트는 기본적으로 0.9.3.0 버전과 동일하지만, 서서히 시간이 지나면서 나뉘게 될 것입니다. (업데이트: 이미 기능면에서 [나뉘어지기 시작했습니다](https://github.com/chrisaljoudi/uBlock/issues/1259)).

저는 uBlock₀을 좀 더 성숙하고 발전된 기능으로 만드는 것에 대해 고려하고 있습니다.

기능들을 추가하는 것을 멈추는 것은 속도를 향상시키며, 소프트웨어를 시대에 뒤떨어지게 만드는 것이 아닙니다. 당신이 그렇게 믿는다면, 지난 달에 애드블록 플러스에 얼마나 많은 기능들이 추가되었는지 확인해 보십시오. uBlock은 거의 매 주간 새로운 기능들이 추가되었습니다.

그래도 이 프로젝트를 유지하고, 잘 작동하도록 하게 할것입니다. 즉, 버그 수정이 대부분 일것입니다. 안정성과 신뢰성이 현재 시점에서는 우선입니다.

아마 제가 필요한 기능이라고 생각될 때, 기능들을 추가할 것입니다. -- 제 스스로 확장기능을 사용하며, 확실히 무언가가 더 필요하다고 느낄 때, 그냥 바로 그것들을 추가 해버릴겁니다.

필터 목록은 평소와 같이 일정한 간격으로 업데이트 될 것입니다.

반복되는 질문이 있습니다. "왜 당신은 원래 프로젝트를 다른 사람에게 이양했습니까?", [답은 여기에 있습니다](https://github.com/gorhill/uBlock/issues/38#issuecomment-91871802).

*** 

<h1 align="center">
<sub>
<img  src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/img/icon38@2x.png"
      height="38"
      width="38">
</sub>
uBlock
</h1>
<p align="center">
<sup> <!-- Pronounciation -->
        간단히 <i>유-블록</i> 입니다. (<code>/ˈjuːˌblɒk/</code>) — <i>당신</i>이 원하는대로 브라우저에 입력하세요.
</sup>
<br>
<sup> <!-- Languages -->
      <img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/img/languageicon-36.png" width="18" height="18">
      <sup>
            <a href="https://github.com/gorhill/uBlock/">
            English,          <a href="https://github.com/fang5566/uBlock/blob/master/README.md#-µblock">
            Chinese (中文),    </a> <a href="https://github.com/delightbot/uBlock/blob/master/README.md#ublock">
            Korean (한국어)   </a>
      </sup>
</sup>
</p>


**여러 브라우저를 위한 빠르고 강력하고 효율적인 차단기입니다.**&nbsp;&nbsp;[<img src="https://travis-ci.org/gorhill/uBlock.svg?branch=master" height="12">](https://travis-ci.org/gorhill/uBlock)

* [용도 및 정보](#용도 및 정보)
* [설명서](#설명서)
* [성능 및 효율성](#성능 및 효율성)
  * [메모리](#메모리)
  * [CPU](#CPU)
  * [차단](#차단)
  * [빠른 테스트](#빠른 테스트)
* [설치](#설치)
  * [크로미움](#크로미움)
  * [파이어폭스](#파이어폭스)
  * [사파리](#사파리)
* [릴리즈 내역](#릴리즈 내역)
* [위키](https://github.com/gorhill/uBlock/wiki)

## 용도 및 정보

uBlock은 *단순한 광고 차단기*가 아닙니다; 여러가지 부분에서 쓸 수 있는 차단기입니다. uBlock은 [Adblock Plus filter syntax](https://adblockplus.org/en/filters)를 통해 광고를 차단합니다. uBlock은 구문을 [확장](https://github.com/gorhill/uBlock/wiki/Filter-syntax-extensions)하고 사용자 정의 규칙 및 필터 사용이 가능하도록 설계되었습니다.

상기해두세요, 이 차단기를 사용하는 것은 **절대** [도둑질](https://twitter.com/LeaVerou/status/518154828166725632)이 아닙니다. 이런 오싹한 상상에 빠지지 마세요. _궁극적_인 논리의 결과가 `차단 = 도둑질` 이라면 이는 불가침적인 개인정보 권리에 대한 범죄입니다.

광고들, "거슬리지 않거나" 혹은 아닐뿐이지만, 요즘 당신이 방문하는 사이트에서 광고가 보이는 부분은 그저 개인정보를 알아내려는 장치의 눈에 보이는 부분일 뿐입니다. **uBlock의 주 목표는 사용자가 개인정보 침해 장치를 무력화시키는 것을 돕는 것입니다.** — 이러한 사용자들을 환영하는 방식으로 더 많은 기술을 원하지 않는 사용자들을 위해, 참여 방법을 마련했습니다. (예를 들어, [µMatrix](https://github.com/gorhill/uMatrix) 같은 것들).

_EasyList_, _Peter Lowe's Adservers_, _EasyPrivacy_ 와 _Malware domains_ 는 uBlock을 설치할 때 기본적으로 활성화 되어 있습니다. 다른 많은 블록 트래커, 분석 등을 쉽게 사용할 수 있습니다. 호스트 파일도 지원됩니다.

uBlock을 설치하고, 당신이 생각하기에 uBlock의 차단목록이 너무 많다고 생각되면 쉽게 필터 리스트에서 선택 해제가 가능합니다. 참고로, 애드블록 플러스는 설치시 _EasyList_ 만 기본적으로 활성화되어 있습니다.

## 설명서

[빠른 가이드: 팝업 유저 인터페이스](https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface)

<a href="https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface"><img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/img/popup-1.png" /></a>

고급 사용자분들은, [유동 필터링](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide)과 [uBlock 위키](https://github.com/gorhill/uBlock/wiki)를 참조하세요.

## 성능

#### 메모리

<div align="center">
평균적으로 볼 때, uBlock은 당신의 브라우저를 훨씬 더 가볍게 만듭니다. <sup>[1]</sup><br><br>

크로미움 <sup>[2]</sup><br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/mem-usage-overall-chart-20141224.png" /><br><br>

파이어폭스<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/mem-usage-overall-chart-20150205.png" /><br><br>

사파리<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/mem-usage-overall-chart-safari-20150205.png" /><br><br>

</div>

<sup>[1] 자세한 메모리 사용량에 대한 벤치마크를 <a href="https://github.com/gorhill/uBlock/wiki/Firefox-version:-benchmarking-memory-footprint">파이어폭스 버전: 메모리 사용량 벤치마크</a> 에서 확인이 가능합니다.</sup><br>

<sup>[2] 중요한 사항: 현재 여기에는 [크로미움 39+ 기반에서 확장기능이 열려 팝업 UI이 뜰 때마다 메모리 릭이 발생하는 버그](https://code.google.com/p/chromium/issues/detail?id=441500)가 존재합니다. 이것은 <i>모든</i> 확장기능에 영향을 줍니다. 크로미움 기반에서 메모리 사용량을 측정할 때 이 점을 유의해 주십시오. 벤치마크에서, 저는 완전하게 팝업을 여는 것을 피했습니다.</sup><br>

#### CPU

<p align="center">
uBlock은 CPU에 부담이 적습니다.<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/cpu-usage-overall-chart-20141226.png" /><br>
<sup>자세한 벤치마크를 이 <a href="https://github.com/gorhill/uBlock/blob/master/doc/benchmarks/cpu-usage-overall-20141226.ods">리브레오피스 스프레드시트</a>에서 확인이 가능합니다.</sup>
</p>

#### 차단

<p align="center">
매우 효율적이기 때문에 덜 차단하는 것을 의미하는 것은 아닙니다.<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/privex-201502-16.png" /><br>
<sup>자세한 벤치마크는  
<a href="https://github.com/gorhill/uBlock/wiki/%C2%B5Block-and-others:-Blocking-ads,-trackers,-malwares">uBlock 그리고 다른 프로그램: 광고 차단, 트래커, 멀웨어</a> 에서 확인이 가능합니다.
</p>

#### 빠른 테스트

- [인덱스](http://raymondhill.net/ublock/tests.html)
- [웹 페이지의 구성 요소](http://raymondhill.net/ublock/tiles1.html)
- [팝업](http://raymondhill.net/ublock/popup.html)

## 설치

확장기능의 [필요한 권한](https://github.com/gorhill/uBlock/wiki/About-the-required-permissions)에 대해 읽어 주시기 바랍니다. 

#### 크로미움

직접 [수동](https://github.com/gorhill/uBlock/tree/master/dist#install)으로 최신 버전을 설치하거나, [크롬 웹 스토어](https://chrome.google.com/webstore/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm)에서 설치하실 수 있습니다. 오페라 브라우저를 사용하신다면, [오페라 스토어](https://addons.opera.com/en-gb/extensions/details/ublock/)에서 설치가  가능합니다.

#### 파이어폭스

[파이어폭스 애드온 홈페이지](https://addons.mozilla.org/ko/firefox/addon/ublock/)에서 설치하거나, [uBlock.firefox.xpi](https://github.com/gorhill/uBlock/releases) 파일을 다운로드 받아 최신 버전을 설치할 수 있습니다, 그리고 다운로드 받은 `xpi` 파일을 애드온 페이지페이지에 드래그 하시면 됩니다.

<sup>**알림:** 새 버전을 _모질라 애드온_ (AMO)에 제출하면, 여러 사항을 검토하는데 대략 **몇 주** 가 소요됩니다. 새로운 버전을 제출하게 되면 검토 보류중이던 항목이 취소되고, 새 제출항목은 검토 순서의 마지막에 배치 될 수 있습니다. 그래서, AMO에 있는 버전은 최신버전보다 이전 버전이며, 이 버전은 개발자의 제어권한에서 제외됩니다.</sup>

#### 사파리

사파리를 위한 최신 버전의 uBlock을 [이 홈페이지](https://chrismatic.io/ublock/)에서 설치하거나, 잠재적으로 구버전일수 있는  [사파리 확장기능 갤러리](https://extensions.apple.com/details/?id=net.gorhill.uBlock-96G4BAKDQ9)에서 설치하실 수 있습니다.

<sup>사파리 6.1 버전 이상 (Safari 8/Yosemite 개발; 6.1/Mountain Lion 및 7/Mavericks 테스트).</sup>

#### 모든 브라우저에 대한 주의 사항

uBlock의 높은 차단효율을 위해서는 동시에 다른 비효율적인 차단제를 사용하지 않는 것이 좋습니다. (예: AdBlock 이나 AdBlock Plus) uBlock은 다른 인기있는 광고 차단기보다 [훨씬 더 좋습니다](#blocking).

## 릴리즈 내역

[릴리즈 페이지](https://github.com/gorhill/uBlock/releases)에서 릴리즈 내역과 릴리즈에 대한 하이라이트 부분을 볼 수 있습니다.

## 정보

[uBlock 선언서](MANIFESTO.md).

무료이며, 개방되어 있으며(오픈소스), 사용자를 위해 사용자가 만들었습니다. 어떠한 기부도 바라지 않습니다.

이 차단기에 포함되어 있는 필터가 없다면, 이 확장기능은 쓸모가 없어집니다. 그러니 정말 어떤것이라도 기부하고 싶은 마음이 든다면, 당신이 사용중인 모두를 위해 무료로 쓸 수 있게 만들어진 필터 리스트를 위해 일하는 사람들을 생각해주세요.

[Crowdin](https://crowdin.net/project/ublock)에서 uBlock의 번역 작업을 도와줄 수 있습니다.

## 라이센스

[GPLv3](https://github.com/gorhill/uBlock/blob/master/LICENSE.txt).
