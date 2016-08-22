
jQuery webSpeaker Plugin
=====================
[jQuery webSpeaker](https://github.com/xc0d3rz/jquery-webSpeaker) is a [jQuery](http://jquery.com) plugin that will make any readable text in the specified HTML DOM element as audible by [responsiveVoice](http://responsivevoice.org),Also you can set a custom Audio track.<br>
[jQuery webSpeaker](https://github.com/xc0d3rz/jquery-webSpeaker) is useful for blind visitors.

Requirements:
-------------
[jQuery webSpeaker](https://github.com/xc0d3rz/jquery-webSpeaker) requires the latest version of [jQuery](http://jquery.com) and [responsiveVoice](http://responsivevoice.org) (Free API to use TTS).

Usage:
------
There are two main approaches to using this plugin: through data attributes on
DOM nodes, and through JS options explicitly passed to the `webSpeaker` function.

These two methods can be mixed and matched as well.  Data attributes takes
precedence over JS options.

### Data Attributes

This approach allows you to define `data-*` attributes on whatever DOM element.This is 
useful when you already know the values at the time that you are constructing the DOM.
##### Use responsiveVoice
You must add the following code before using responsiveVoice.
```html
<script type="text/javascript" src="https://code.responsivevoice.org/responsivevoice.js"></script>
```

```html
<p class="speaker">Hello World</p>
 <script type="text/javascript">
   $('.speaker').webSpeaker();
 </script>
<script type="text/javascript" src="https://code.responsivevoice.org/responsivevoice.js"></script>
```

##### Set an audio track
```html
<p class="speaker" 
  data-track="audio track link"  data-responsive-Voice="false">Hello World</p>
   <script type="text/javascript">
      $('.speaker').webSpeaker();
    </script>
```
Refer to the **Options** section below for more info on the various options
available.

### JavaScript Options

This approach allows you to pass values to the `webSpeaker` function.  This is
useful when you don't know the values at the time the DOM is being rendered.
##### Use responsiveVoice

```html
<p class="speaker">Hello World</p>
    <script type="text/javascript">
      $('.speaker').webSpeaker({
       language:"en"
       });
    </script>
```

##### Set an audio track

```html
<p class="speaker"></p>
    <script type="text/javascript">
      $('.speaker').webSpeaker({
        track:"audio track link"
      });
    </script>
```
Refer to the **Options** section below for more info on the various options
available.

Options:
--------
A complete listing of the options that can be passed to the `webSpeaker` method is 
below.

<table>
  <tr>
    <th>Option</th>
    <th>Data Attribute</th>
    <th>Method</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><i>text</i></td>
    <td><i>data-text</i></td>
    <td><code>string</code></td>
    <td>Element text</td>
    <td>Set text</td>
  </tr>  
  <tr>
    <td><i>language</i></td>
    <td><i>data-language</i></td>
    <td>
     <code>en</code> : <i>UK English Female</i> <br>
     <code>es</code> : <i>Spanish Female</i> <br>
     <code>fr</code> : <i>French Female</i> <br>
     <code>ar</code> : <i>Arabic Male</i> <br>
     <a href="http://responsivevoice.org">More voices</a>
    </td>
    <td>en</td>
    <td>The voice language of responsiveVoice.</td>
  </tr>
  <tr>
    <td><i>playType</i></td>
    <td><i>data-play-Type</i></td>
    <td>
    <code>button</code> : <i>will play on click the button near the specification element</i> <br>
    <code>hover</code> : <i>will play on mouse over</i> <br>
    </td>
    <td>button</td>
    <td>Play method/type</td>
  </tr>
  <tr>
    <td><i>playIcon</i></td>
    <td><i>data-play-Icon</i></td>
    <td><i>Accept any html</i></td>
    <td>&#128266;</td>
    <td>Play button icon</td>
  </tr>
  <tr>
    <td><i>track</i></td>
    <td><i>data-track</i></td>
    <td><i>Accept URLs</i></td>
    <td>false</td>
    <td><i>Set an audio track url</i></td>
  </tr>
  <tr>
    <td><i>responsiveVoice</i></td>
    <td><i>data-responsive-Voice</i></td>
    <td><code>boolean</code></td>
    <td>true</td>
    <td><i>Enable responsiveVoice</i></td>   
  </tr>
</table>


Created By:
-----------
[xC0d3rZ](https://xc0d3rz.github.io)

License:
--------
jQuery-webSpeaker is released under the
[MIT license](http://www.opensource.org/licenses/MIT).
