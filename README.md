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
      발음하면 <i>you-block</i> 입니다. (<code>/ˈjuːˌblɒk/</code>) — <i>당신</i>이 원하는대로 불러주세요.
</sup>
<br>
<sup> <!-- Languages -->
      <img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/img/languageicon-36.png" width="18" height="18">
      <sup>
            English,          <a href="https://github.com/fang5566/uBlock#-%C2%B5block">
            Chinese (中文),    </a> <a href="https://github.com/delightbot/uBlock-ko">
            Korean (한국어)   </a>
      </sup>
</sup>
</p>


**여러 브라우저를 위한 빠르고 강력하고 효율적인 차단기입니다.**&nbsp;&nbsp;[<img src="https://travis-ci.org/gorhill/uBlock.svg?branch=master" height="12">](https://travis-ci.org/gorhill/uBlock)

* [용도 및 정보](#philosophy)
* [성능 및 효율성](#performance)
  * [메모리](#memory)
  * [CPU](#cpu)
  * [차단](#blocking)
  * [빠른 테스트](#quick-tests)
* [설치](#installation)
  * [크로미움](#chromium)
  * [파이어폭스](#firefox)
  * [사파리](#safari)
* [릴리즈 내역](#release-history)
* [위키](https://github.com/gorhill/uBlock/wiki)

## 서문

uBlock은 *ad blocker*가 아닙니다; 범용 차단기입니다. uBlock은 [Adblock Plus filter syntax](https://adblockplus.org/en/filters)를 통해 광고를 차단합니다. uBlock은 구문을 [확장](https://github.com/gorhill/uBlock/wiki/Filter-syntax-extensions)하고 사용자 정의 규칙 및 필터 사용이 가능하도록 설계되었습니다.

상기해두세요, 이 차단기를 사용하는 것은 **절대** [도둑질](https://twitter.com/LeaVerou/status/518154828166725632)이 아닙니다. 이런 오싹한 상상에 빠지지 마세요. _궁극적인_ 논리의 결과가 `차단 = 도둑질` 이라면 이는 불가침적인 개인정보 권리에 대한 범죄입니다.

광고들, "거슬리지 않거나" 혹은 아닐뿐이지만, 요즘 당신이 방문하는 사이트에서 광고가 보이는 부분은 그저 개인정보를 알아내려는 장치의 눈에 보이는 부분일 뿐입니다. **uBlock's main goal is to help users neutralize such privacy-invading apparatus** — in a way that welcomes those users who don't wish to use more technical, involved means (such as [µMatrix](https://github.com/gorhill/uMatrix)).

_EasyList_, _Peter Lowe's Adservers_, _EasyPrivacy_ and _Malware domains_ are enabled by default when you install uBlock. Many more lists are readily available to block trackers, analytics, and more. Hosts files are also supported.

Once you install uBlock, you may easily un-select any of the pre-selected filter lists if you think uBlock blocks too much. For reference, Adblock Plus installs with only _EasyList_ enabled by default.

## Performance

#### Memory

<div align="center">
On average, uBlock <b>really</b> does make your browser run leaner. <sup>[1]</sup><br><br>

Chromium <sup>[2]</sup><br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/mem-usage-overall-chart-20141224.png" /><br><br>

Firefox<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/mem-usage-overall-chart-20150205.png" /><br><br>

Safari<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/mem-usage-overall-chart-safari-20150205.png" /><br><br>

</div>

<sup>[1] Details of the benchmark available at <a href="https://github.com/gorhill/uBlock/wiki/Firefox-version:-benchmarking-memory-footprint">Firefox version: benchmarking memory footprint</a>.</sup><br>

<sup>[2] Important note: There is currently a [bug in Chromium 39+ which causes a new memory leak each time the popup UI of an extension is opened](https://code.google.com/p/chromium/issues/detail?id=441500). This affects <i>all</i> extensions. Keep this in mind when measuring Chromium's memory usage. In the benchmarks, I avoided opening the popups completely.</sup><br>

#### CPU

<p align="center">
uBlock is also easy on the CPU<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/cpu-usage-overall-chart-20141226.png" /><br>
<sup>Details of the benchmark available in <a href="https://github.com/gorhill/uBlock/blob/master/doc/benchmarks/cpu-usage-overall-20141226.ods">this LibreOffice spreadsheet</a>.</sup>
</p>

#### Blocking

<p align="center">
Being lean and efficient doesn't mean blocking less<br>
<img src="https://raw.githubusercontent.com/gorhill/uBlock/master/doc/benchmarks/privex-201502-16.png" /><br>
<sup>For details of benchmark, see 
<a href="https://github.com/gorhill/uBlock/wiki/%C2%B5Block-and-others:-Blocking-ads,-trackers,-malwares">uBlock and others: Blocking ads, trackers, malwares</a>.
</p>

#### Quick tests

- [Index](http://raymondhill.net/ublock/tests.html)
- [Web page components](http://raymondhill.net/ublock/tiles1.html)
- [Popups](http://raymondhill.net/ublock/popup.html)

## Installation

Feel free to read [about the extension's required permissions](https://github.com/gorhill/uBlock/wiki/About-the-required-permissions).

#### Chromium

You can install the latest version [manually](https://github.com/gorhill/uBlock/tree/master/dist#install), from the [Chrome Web Store](https://chrome.google.com/webstore/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm), or from the [Opera store](https://addons.opera.com/en-gb/extensions/details/ublock/).

#### Firefox

Install from [Firefox Add-ons homepage](https://addons.mozilla.org/en-US/firefox/addon/ublock/), or you can install by downloading the latest [uBlock.firefox.xpi](https://github.com/gorhill/uBlock/releases) file, and by dragging the downloaded `xpi` file to your add-on page.

#### Safari

Install the latest uBlock for Safari [from its homepage](https://chrismatic.io/ublock/), or a potentially-outdated version from the [Safari Extension Gallery](https://extensions.apple.com/details/?id=net.gorhill.uBlock-96G4BAKDQ9).

<sup>Safari 6.1 and later (developed on Safari 8/Yosemite; tested on 6.1/Mountain Lion and 7/Mavericks).</sup>

#### Note for all browsers

To benefit from uBlock's higher efficiency, it's advised that you don't use other inefficient blockers at the same time (such as AdBlock or Adblock Plus). uBlock will do [as well or better](#blocking) than most popular ad blockers.

## Release History

See the [releases pages](https://github.com/gorhill/uBlock/releases) for a history of releases and highlights for each release.

## Documentation

[Quick guide: popup user interface](https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface)

![Popup](https://raw.githubusercontent.com/gorhill/uBlock/master/doc/img/popup-1.png)

For advanced usage, read about [dynamic filtering](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide) and more on [uBlock's wiki](https://github.com/gorhill/uBlock/wiki).

## About

[uBlock's manifesto](MANIFESTO.md).

Free. Open source. For users by users. No donations sought.

Without the preset lists of filters, this extension is nothing. So if ever you
really do want to contribute something, think about the people working hard
to maintain the filter lists you are using, which were made available to use by
all for free.

You can contribute by helping translate uBlock [on Crowdin](https://crowdin.net/project/ublock).

## License

[GPLv3](https://github.com/gorhill/uBlock/blob/master/LICENSE.txt).
