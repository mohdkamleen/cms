<!DOCTYPE html>
<!-- saved from url=(0040)http://paperjs.org/examples/candy-crash/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="msapplication-tap-highlight" content="no">
  <link rel="stylesheet" href="./Paper_files/style.css">
  <link rel="icon" href="http://paperjs.org/assets/favicon.ico" type="image/x-icon">
  <link rel="shortcut icon" href="http://paperjs.org/assets/favicon.ico">
  <script type="text/javascript" async="" src="./Paper_files/ga.js.download"></script><script src="./Paper_files/jquery.js.download"></script>
  <script src="./Paper_files/paper.js.download"></script>
  <script src="./Paper_files/codemirror.js.download"></script>
  <script src="./Paper_files/scripts.js.download"></script>
  <script>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-10082945-6']);
    _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
  <title>Paper.js — Candy Crash</title>
</head>
  <body class="fullscreen" style="">
    <nav>
      <h1><a href="http://paperjs.org/">Paper.js</a></h1>
<ul>
  <li><a href="http://paperjs.org/about/">About</a>
  </li>
  <li><a href="http://paperjs.org/features/">Features</a>
  </li>
  <li class="spacer"></li>
  <li><a href="http://paperjs.org/examples/">Examples</a>
<ul>
  <li><a href="http://paperjs.org/examples/boolean-operations/">Boolean Operations</a></li>
  <li class="active"><a href="http://paperjs.org/examples/candy-crash/">Candy Crash</a></li>
  <li><a href="http://paperjs.org/examples/satie-liked-to-draw/">Satie Liked To Draw</a></li>
  <li><a href="http://paperjs.org/examples/chain/">Chain</a></li>
  <li><a href="http://paperjs.org/examples/tadpoles/">Tadpoles</a></li>
  <li><a href="http://paperjs.org/examples/nyan-rainbow/">Nyan Rainbow</a></li>
  <li><a href="http://paperjs.org/examples/rounded-rectangles/">Rounded Rectangles</a></li>
  <li><a href="http://paperjs.org/examples/radial-rainbows/">Radial Rainbows</a></li>
  <li><a href="http://paperjs.org/examples/meta-balls/">Meta Balls</a></li>
  <li><a href="http://paperjs.org/examples/voronoi/">Voronoi</a></li>
  <li><a href="http://paperjs.org/examples/future-splash/">Future Splash</a></li>
  <li><a href="http://paperjs.org/examples/smoothing/">Smoothing</a></li>
  <li><a href="http://paperjs.org/examples/spiral-raster/">Spiral Raster</a></li>
  <li><a href="http://paperjs.org/examples/division-raster/">Division Raster</a></li>
  <li><a href="http://paperjs.org/examples/q-bertify/">Q-bertify</a></li>
  <li><a href="http://paperjs.org/examples/path-intersections/">Path Intersections</a></li>
  <li><a href="http://paperjs.org/examples/path-simplification/">Path Simplification</a></li>
  <li><a href="http://paperjs.org/examples/hit-testing/">Hit Testing</a></li>
  <li><a href="http://paperjs.org/examples/bouncing-balls/">Bouncing Balls</a></li>
</ul>
  </li>
  <li><a href="http://paperjs.org/showcase/">Showcase</a>
  </li>
  <li class="spacer"></li>
  <li><a href="http://paperjs.org/tutorials/">Tutorials</a>
  </li>
  <li><a href="http://paperjs.org/reference/">Reference</a>
  </li>
  <li><a href="http://sketch.paperjs.org/">Sketch</a>
  </li>
  <li class="spacer"></li>
  <li><a href="http://paperjs.org/download/">Download</a>
  </li>
  <li><a href="http://paperjs.org/donation/">Donation</a>
  </li>
  <li><a href="http://paperjs.org/license/">License</a>
  </li>
  <li class="spacer"></li>
  <li><a href="http://groups.google.com/group/paperjs" target="_blank">Mailing List</a>
  </li>
  <li><a href="http://twitter.com/PaperJS" target="_blank">Follow on Twitter</a>
  </li>
  <li><a href="http://github.com/paperjs/paper.js" target="_blank">Watch on Github</a>
  </li>
</ul>
    </nav>
<article><div class="paperscript">
<div class="buttons">
<div class="button run" style="margin-right: 25px;">Run</div>
<div class="explain hidden">To run it again, simply press press <b>Run</b> →</div>
</div>
<div class="source" style="border-width: 0px 0px 0px 1px; width: 1271px; height: 927px;"><div class="CodeMirror"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 2440px; left: 50px;"><textarea wrap="off" autocorrect="off" autocapitalize="off" style="position: absolute; padding: 0px; width: 1px; height: 1em;"></textarea></div><div class="CodeMirror-scrollbar" style="display: none;"><div class="CodeMirror-scrollbar-inner"></div></div><div class="CodeMirror-scroll cm-s-default CodeMirror-focused" tabindex="-1"><div style="position: relative;"><div style="position: relative; top: 0px;"><div class="CodeMirror-gutter" style="height: 2468px;"><div class="CodeMirror-gutter-text"><pre>1</pre><pre>2</pre><pre>3</pre><pre>4</pre><pre>5</pre><pre>6</pre><pre>7</pre><pre>8</pre><pre>9</pre><pre>10</pre><pre>11</pre><pre>12</pre><pre>13</pre><pre>14</pre><pre>15</pre><pre>16</pre><pre>17</pre><pre>18</pre><pre>19</pre><pre>20</pre><pre>21</pre><pre>22</pre><pre>23</pre><pre>24</pre><pre>25</pre><pre>26</pre><pre>27</pre><pre>28</pre><pre>29</pre><pre>30</pre><pre>31</pre><pre>32</pre><pre>33</pre><pre>34</pre><pre>35</pre><pre>36</pre><pre>37</pre><pre>38</pre><pre>39</pre><pre>40</pre><pre>41</pre><pre>42</pre><pre>43</pre><pre>44</pre><pre>45</pre><pre>46</pre><pre>47</pre><pre>48</pre><pre>49</pre><pre>50</pre><pre>51</pre><pre>52</pre><pre>53</pre><pre>54</pre><pre>55</pre><pre>56</pre><pre>57</pre><pre>58</pre><pre>59</pre><pre>60</pre><pre>61</pre><pre>62</pre><pre>63</pre><pre>64</pre><pre>65</pre><pre>66</pre><pre>67</pre><pre>68</pre><pre>69</pre><pre>70</pre><pre>71</pre><pre>72</pre><pre>73</pre><pre>74</pre><pre>75</pre><pre>76</pre><pre>77</pre><pre>78</pre><pre>79</pre><pre>80</pre><pre>81</pre><pre>82</pre><pre>83</pre><pre>84</pre><pre>85</pre><pre>86</pre><pre>87</pre><pre>88</pre><pre>89</pre><pre>90</pre><pre>91</pre><pre>92</pre><pre>93</pre><pre>94</pre><pre>95</pre><pre>96</pre><pre>97</pre><pre>98</pre><pre>99</pre><pre>100</pre><pre>101</pre><pre>102</pre><pre>103</pre><pre>104</pre><pre>105</pre><pre>106</pre><pre>107</pre><pre>108</pre><pre>109</pre><pre>110</pre><pre>111</pre><pre>112</pre><pre>113</pre><pre>114</pre><pre>115</pre><pre>116</pre><pre>117</pre><pre>118</pre><pre>119</pre><pre>120</pre><pre>121</pre><pre>122</pre><pre>123</pre><pre>124</pre><pre>125</pre><pre>126</pre><pre>127</pre><pre>128</pre><pre>129</pre><pre>130</pre><pre>131</pre><pre>132</pre><pre>133</pre><pre>134</pre><pre>135</pre><pre>136</pre></div></div><div class="CodeMirror-lines"><div style="position: relative; z-index: 0; outline: none; min-width: 659px; margin-left: 34px;"><div style="position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden;"><pre>}<span> </span></pre></div><pre class="CodeMirror-cursor" style="top: 2430px; left: 8px; display: none; visibility: hidden;">&nbsp;</pre><pre class="CodeMirror-cursor" style="visibility: hidden; left: 651px;">&nbsp;</pre><div style="position: relative; z-index: -1;"><div class="CodeMirror-selected" style="position: absolute; left: 0px; top: 0px; right: -1px; height: 2430px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 0px; top: 2430px; right: 1203px; height: 18px;"></div></div><div style=""><pre><span class="cm-comment">// kynd.info 2014</span></pre><pre> </pre><pre><span class="cm-keyword">function</span> <span class="cm-variable">Ball</span>(<span class="cm-def">r</span>, <span class="cm-def">p</span>, <span class="cm-def">v</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">radius</span> = <span class="cm-variable-2">r</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">point</span> = <span class="cm-variable-2">p</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">vector</span> = <span class="cm-variable-2">v</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">maxVec</span> = <span class="cm-number">15</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span> = <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable-2">r</span> / <span class="cm-number">3</span> + <span class="cm-number">2</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span> = [];</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffsetBuff</span> = [];</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">sidePoints</span> = [];</pre><pre><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">path</span> = <span class="cm-keyword">new</span> <span class="cm-variable">Path</span>({</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-property">fillColor</span>: {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-property">hue</span>: <span class="cm-variable">Math</span>.<span class="cm-property">random</span>() * <span class="cm-number">360</span>,</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable">saturation</span>: <span class="cm-number">1</span>,</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable">brightness</span>: <span class="cm-number">1</span></pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span>},</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-property">blendMode</span>: <span class="cm-string">'lighter'</span></pre><pre><span class="cm-tab">    </span>});</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span>; <span class="cm-variable-2">i</span> ++) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">this</span>.<span class="cm-property">radius</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffsetBuff</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">this</span>.<span class="cm-property">radius</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">path</span>.<span class="cm-property">add</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Point</span>());</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">sidePoints</span>.<span class="cm-property">push</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Point</span>({</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-property">angle</span>: <span class="cm-number">360</span> / <span class="cm-variable-2">this</span>.<span class="cm-variable">numSegment</span> * <span class="cm-variable-2">i</span>,</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable">length</span>: <span class="cm-number">1</span></pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span>}));</pre><pre><span class="cm-tab">    </span>}</pre><pre>}</pre><pre> </pre><pre><span class="cm-variable">Ball</span>.<span class="cm-property">prototype</span> = {</pre><pre><span class="cm-tab">    </span><span class="cm-property">iterate</span>: <span class="cm-keyword">function</span>() {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">checkBorders</span>();</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">this</span>.<span class="cm-property">vector</span>.<span class="cm-property">length</span> &gt; <span class="cm-variable-2">this</span>.<span class="cm-variable">maxVec</span>)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">vector</span>.<span class="cm-property">length</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">maxVec</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">point</span> += <span class="cm-variable-2">this</span>.<span class="cm-property">vector</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">updateShape</span>();</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">checkBorders</span>: <span class="cm-keyword">function</span>() {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">size</span> = <span class="cm-variable">view</span>.<span class="cm-property">size</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">x</span> &lt; -<span class="cm-variable-2">this</span>.<span class="cm-variable">radius</span>)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">x</span> = <span class="cm-variable-2">size</span>.<span class="cm-property">width</span> + <span class="cm-variable-2">this</span>.<span class="cm-property">radius</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">x</span> &gt; <span class="cm-variable-2">size</span>.<span class="cm-variable">width</span> + <span class="cm-variable-2">this</span>.<span class="cm-variable">radius</span>)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">x</span> = -<span class="cm-variable-2">this</span>.<span class="cm-property">radius</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">y</span> &lt; -<span class="cm-variable-2">this</span>.<span class="cm-variable">radius</span>)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">y</span> = <span class="cm-variable-2">size</span>.<span class="cm-property">height</span> + <span class="cm-variable-2">this</span>.<span class="cm-property">radius</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">y</span> &gt; <span class="cm-variable-2">size</span>.<span class="cm-variable">height</span> + <span class="cm-variable-2">this</span>.<span class="cm-variable">radius</span>)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">y</span> = -<span class="cm-variable-2">this</span>.<span class="cm-property">radius</span>;</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">updateShape</span>: <span class="cm-keyword">function</span>() {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">segments</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">path</span>.<span class="cm-property">segments</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span>; <span class="cm-variable-2">i</span> ++)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">segments</span>[<span class="cm-variable-2">i</span>].<span class="cm-property">point</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">getSidePoint</span>(<span class="cm-variable-2">i</span>);</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">path</span>.<span class="cm-property">smooth</span>();</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span>; <span class="cm-variable-2">i</span> ++) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">i</span>] &lt; <span class="cm-variable-2">this</span>.<span class="cm-variable">radius</span> / <span class="cm-number">4</span>)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">i</span>] = <span class="cm-variable-2">this</span>.<span class="cm-property">radius</span> / <span class="cm-number">4</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">next</span> = (<span class="cm-variable-2">i</span> + <span class="cm-number">1</span>) % <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">prev</span> = (<span class="cm-variable-2">i</span> &gt; <span class="cm-number">0</span>) ? <span class="cm-variable-2">i</span> - <span class="cm-number">1</span> : <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span> - <span class="cm-number">1</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">offset</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">i</span>];</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">offset</span> += (<span class="cm-variable-2">this</span>.<span class="cm-property">radius</span> - <span class="cm-variable-2">offset</span>) / <span class="cm-number">15</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">offset</span> += ((<span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">next</span>] + <span class="cm-variable-2">this</span>.<span class="cm-variable">boundOffset</span>[<span class="cm-variable-2">prev</span>]) / <span class="cm-number">2</span> - <span class="cm-variable-2">offset</span>) / <span class="cm-number">3</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffsetBuff</span>[<span class="cm-variable-2">i</span>] = <span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">i</span>] = <span class="cm-variable-2">offset</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span>}</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">react</span>: <span class="cm-keyword">function</span>(<span class="cm-def">b</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">dist</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">point</span>.<span class="cm-property">getDistance</span>(<span class="cm-variable-2">b</span>.<span class="cm-property">point</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">dist</span> &lt; <span class="cm-variable-2">this</span>.<span class="cm-variable">radius</span> + <span class="cm-variable-2">b</span>.<span class="cm-variable">radius</span> &amp;&amp; <span class="cm-variable-2">dist</span> != <span class="cm-number">0</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">overlap</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">radius</span> + <span class="cm-variable-2">b</span>.<span class="cm-property">radius</span> - <span class="cm-variable-2">dist</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">direc</span> = (<span class="cm-variable-2">this</span>.<span class="cm-property">point</span> - <span class="cm-variable-2">b</span>.<span class="cm-variable">point</span>).<span class="cm-property">normalize</span>(<span class="cm-variable-2">overlap</span> * <span class="cm-number">0.015</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">vector</span> += <span class="cm-variable-2">direc</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">b</span>.<span class="cm-property">vector</span> -= <span class="cm-variable-2">direc</span>;</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">calcBounds</span>(<span class="cm-variable-2">b</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">b</span>.<span class="cm-property">calcBounds</span>(<span class="cm-variable-2">this</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">updateBounds</span>();</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">b</span>.<span class="cm-property">updateBounds</span>();</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span>}</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">getBoundOffset</span>: <span class="cm-keyword">function</span>(<span class="cm-def">b</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">diff</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">point</span> - <span class="cm-variable-2">b</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">angle</span> = (<span class="cm-variable-2">diff</span>.<span class="cm-property">angle</span> + <span class="cm-number">180</span>) % <span class="cm-number">360</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">return</span> <span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable-2">angle</span> / <span class="cm-number">360</span> * <span class="cm-variable-2">this</span>.<span class="cm-variable">boundOffset</span>.<span class="cm-variable">length</span>)];</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">calcBounds</span>: <span class="cm-keyword">function</span>(<span class="cm-def">b</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span>; <span class="cm-variable-2">i</span> ++) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">tp</span> = <span class="cm-variable-2">this</span>.<span class="cm-property">getSidePoint</span>(<span class="cm-variable-2">i</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">bLen</span> = <span class="cm-variable-2">b</span>.<span class="cm-property">getBoundOffset</span>(<span class="cm-variable-2">tp</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-def">td</span> = <span class="cm-variable-2">tp</span>.<span class="cm-property">getDistance</span>(<span class="cm-variable-2">b</span>.<span class="cm-property">point</span>);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">td</span> &lt; <span class="cm-variable-2">bLen</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffsetBuff</span>[<span class="cm-variable-2">i</span>] -= (<span class="cm-variable-2">bLen</span>  - <span class="cm-variable-2">td</span>) / <span class="cm-number">2</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span>}</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span>}</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">getSidePoint</span>: <span class="cm-keyword">function</span>(<span class="cm-def">index</span>) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">return</span> <span class="cm-variable-2">this</span>.<span class="cm-property">point</span> + <span class="cm-variable-2">this</span>.<span class="cm-property">sidePoints</span>[<span class="cm-variable-2">index</span>] * <span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">index</span>];</pre><pre><span class="cm-tab">    </span>},</pre><pre> </pre><pre><span class="cm-tab">    </span><span class="cm-property">updateBounds</span>: <span class="cm-keyword">function</span>() {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable-2">this</span>.<span class="cm-property">numSegment</span>; <span class="cm-variable-2">i</span> ++)</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable-2">this</span>.<span class="cm-property">boundOffset</span>[<span class="cm-variable-2">i</span>] = <span class="cm-variable-2">this</span>.<span class="cm-property">boundOffsetBuff</span>[<span class="cm-variable-2">i</span>];</pre><pre><span class="cm-tab">    </span>}</pre><pre>};</pre><pre> </pre><pre><span class="cm-comment">//--------------------- main ---------------------</span></pre><pre> </pre><pre><span class="cm-keyword">var</span> <span class="cm-variable">balls</span> = [];</pre><pre><span class="cm-keyword">var</span> <span class="cm-variable">numBalls</span> = <span class="cm-number">18</span>;</pre><pre><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-variable">i</span> = <span class="cm-number">0</span>; <span class="cm-variable">i</span> &lt; <span class="cm-variable">numBalls</span>; <span class="cm-variable">i</span>++) {</pre><pre><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-variable">position</span> = <span class="cm-variable">Point</span>.<span class="cm-property">random</span>() * <span class="cm-variable">view</span>.<span class="cm-property">size</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-variable">vector</span> = <span class="cm-keyword">new</span> <span class="cm-variable">Point</span>({</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-property">angle</span>: <span class="cm-number">360</span> * <span class="cm-variable">Math</span>.<span class="cm-variable">random</span>(),</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable">length</span>: <span class="cm-variable">Math</span>.<span class="cm-variable">random</span>() * <span class="cm-number">10</span></pre><pre><span class="cm-tab">    </span>});</pre><pre><span class="cm-tab">    </span><span class="cm-keyword">var</span> <span class="cm-variable">radius</span> = <span class="cm-variable">Math</span>.<span class="cm-property">random</span>() * <span class="cm-number">60</span> + <span class="cm-number">60</span>;</pre><pre><span class="cm-tab">    </span><span class="cm-variable">balls</span>.<span class="cm-property">push</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Ball</span>(<span class="cm-variable">radius</span>, <span class="cm-variable">position</span>, <span class="cm-variable">vector</span>));</pre><pre>}</pre><pre> </pre><pre><span class="cm-keyword">function</span> <span class="cm-variable">onFrame</span>() {</pre><pre><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable">balls</span>.<span class="cm-property">length</span> - <span class="cm-number">1</span>; <span class="cm-variable-2">i</span>++) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">j</span> = <span class="cm-variable-2">i</span> + <span class="cm-number">1</span>; <span class="cm-variable-2">j</span> &lt; <span class="cm-variable">balls</span>.<span class="cm-variable">length</span>; <span class="cm-variable-2">j</span>++) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable">balls</span>[<span class="cm-variable-2">i</span>].<span class="cm-property">react</span>(<span class="cm-variable">balls</span>[<span class="cm-variable-2">j</span>]);</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span>}</pre><pre><span class="cm-tab">    </span>}</pre><pre><span class="cm-tab">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> = <span class="cm-number">0</span>, <span class="cm-def">l</span> = <span class="cm-variable">balls</span>.<span class="cm-property">length</span>; <span class="cm-variable-2">i</span> &lt; <span class="cm-variable-2">l</span>; <span class="cm-variable-2">i</span>++) {</pre><pre><span class="cm-tab">    </span><span class="cm-tab">    </span><span class="cm-variable">balls</span>[<span class="cm-variable-2">i</span>].<span class="cm-property">iterate</span>();</pre><pre><span class="cm-tab">    </span>}</pre><pre>}</pre></div></div></div></div></div></div></div></div><script type="text/paperscript" canvas="canvas-1" data-paper-ignore="true">
// kynd.info 2014

function Ball(r, p, v) {
	this.radius = r;
	this.point = p;
	this.vector = v;
	this.maxVec = 15;
	this.numSegment = Math.floor(r / 3 + 2);
	this.boundOffset = [];
	this.boundOffsetBuff = [];
	this.sidePoints = [];
	this.path = new Path({
		fillColor: {
			hue: Math.random() * 360,
			saturation: 1,
			brightness: 1
		},
		blendMode: 'lighter'
	});

	for (var i = 0; i < this.numSegment; i ++) {
		this.boundOffset.push(this.radius);
		this.boundOffsetBuff.push(this.radius);
		this.path.add(new Point());
		this.sidePoints.push(new Point({
			angle: 360 / this.numSegment * i,
			length: 1
		}));
	}
}

Ball.prototype = {
	iterate: function() {
		this.checkBorders();
		if (this.vector.length > this.maxVec)
			this.vector.length = this.maxVec;
		this.point += this.vector;
		this.updateShape();
	},

	checkBorders: function() {
		var size = view.size;
		if (this.point.x < -this.radius)
			this.point.x = size.width + this.radius;
		if (this.point.x > size.width + this.radius)
			this.point.x = -this.radius;
		if (this.point.y < -this.radius)
			this.point.y = size.height + this.radius;
		if (this.point.y > size.height + this.radius)
			this.point.y = -this.radius;
	},

	updateShape: function() {
		var segments = this.path.segments;
		for (var i = 0; i < this.numSegment; i ++)
			segments[i].point = this.getSidePoint(i);

		this.path.smooth();
		for (var i = 0; i < this.numSegment; i ++) {
			if (this.boundOffset[i] < this.radius / 4)
				this.boundOffset[i] = this.radius / 4;
			var next = (i + 1) % this.numSegment;
			var prev = (i > 0) ? i - 1 : this.numSegment - 1;
			var offset = this.boundOffset[i];
			offset += (this.radius - offset) / 15;
			offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
			this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
		}
	},

	react: function(b) {
		var dist = this.point.getDistance(b.point);
		if (dist < this.radius + b.radius && dist != 0) {
			var overlap = this.radius + b.radius - dist;
			var direc = (this.point - b.point).normalize(overlap * 0.015);
			this.vector += direc;
			b.vector -= direc;

			this.calcBounds(b);
			b.calcBounds(this);
			this.updateBounds();
			b.updateBounds();
		}
	},

	getBoundOffset: function(b) {
		var diff = this.point - b;
		var angle = (diff.angle + 180) % 360;
		return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
	},

	calcBounds: function(b) {
		for (var i = 0; i < this.numSegment; i ++) {
			var tp = this.getSidePoint(i);
			var bLen = b.getBoundOffset(tp);
			var td = tp.getDistance(b.point);
			if (td < bLen) {
				this.boundOffsetBuff[i] -= (bLen  - td) / 2;
			}
		}
	},

	getSidePoint: function(index) {
		return this.point + this.sidePoints[index] * this.boundOffset[index];
	},

	updateBounds: function() {
		for (var i = 0; i < this.numSegment; i ++)
			this.boundOffset[i] = this.boundOffsetBuff[i];
	}
};

//--------------------- main ---------------------

var balls = [];
var numBalls = 18;
for (var i = 0; i < numBalls; i++) {
	var position = Point.random() * view.size;
	var vector = new Point({
		angle: 360 * Math.random(),
		length: Math.random() * 10
	});
	var radius = Math.random() * 60 + 60;
	balls.push(new Ball(radius, position, vector));
}

function onFrame() {
	for (var i = 0; i < balls.length - 1; i++) {
		for (var j = i + 1; j < balls.length; j++) {
			balls[i].react(balls[j]);
		}
	}
	for (var i = 0, l = balls.length; i < l; i++) {
		balls[i].iterate();
	}
}
</script>
<div class="canvas">
<canvas resize="true" id="canvas-1" style="background: black; -webkit-user-drag: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" width="1272" height="927" data-paper-scope="1" class="hidden"></canvas>
</div>
</div>
</article>
  
</body></html>