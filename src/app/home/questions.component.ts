

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-page',
  styles: [`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #c70000;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  section#faqs {
    background: #fdfdfd;
    min-height: 100vh;
    padding: 60px 0;
  }
  .section-title {
    text-align: center;
    margin-bottom: 50px;
  }
  .section-title h2 {
    margin: 0 0 10px;
  }
  .separator {
    background-color: #ccc;
    border: 1px solid #ccc;
    display: block;
    height: 5px;
    margin: 0 auto;
    position: relative;
    width: 60px;
  }
  .separator::after {
    background: #666;
    content: '';
    height: 5px;
    left: -1px;
    position: absolute;
    top: -1px;
    width: 30px;
  }
  .card {
    border: none;
    background: #fff;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px !important;
    overflow: hidden;
  }
  .card + .card {
    margin-top: 30px;
  }
  .card-header {
    padding: 0px;
    background: #fff;
    border: none;
  }
  .card-header h4 {
    margin: 0;
    padding: 25px 45px 25px 25px;
    cursor: pointer;
    position: relative;
    font-size: 20px;
  }
  .card-header h4.collapsed::after {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 24px;
    content: '\f055';
    font-family: FontAwesome;
    font-size: 22px;
    line-height: 22px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .card-header h4::after {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 24px;
    content: '\f056';
    font-family: FontAwesome;
    font-size: 22px;
    line-height: 22px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .card-body {
    padding: 0 25px 25px;
  }
  .card-body p:last-child {
    margin: 0;
  }
`,
],
template: `
<section id="faqs" class="section-spacing inverse-bg">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 1422 800"><g stroke-width="3.5" stroke="hsl(335, 77%, 50%)" fill="none" stroke-linecap="butt"><line x1="48" y1="0" x2="0" y2="48" opacity="0.05"></line><line x1="48" y1="0" x2="96" y2="48" opacity="0.05"></line><line x1="144" y1="0" x2="96" y2="48" opacity="0.05"></line><line x1="144" y1="0" x2="192" y2="48" opacity="0.05"></line><line x1="240" y1="0" x2="192" y2="48" opacity="0.05"></line><line x1="288" y1="0" x2="240" y2="48" opacity="0.05"></line><line x1="288" y1="0" x2="336" y2="48" opacity="0.05"></line><line x1="384" y1="0" x2="336" y2="48" opacity="0.05"></line><line x1="384" y1="0" x2="432" y2="48" opacity="0.05"></line><line x1="480" y1="0" x2="432" y2="48" opacity="0.05"></line><line x1="528" y1="0" x2="480" y2="48" opacity="0.05"></line><line x1="576" y1="0" x2="528" y2="48" opacity="0.05"></line><line x1="624" y1="0" x2="576" y2="48" opacity="0.05"></line><line x1="624" y1="0" x2="672" y2="48" opacity="0.05"></line><line x1="672" y1="0" x2="720" y2="48" opacity="0.05"></line><line x1="720" y1="0" x2="768" y2="48" opacity="0.05"></line><line x1="816" y1="0" x2="768" y2="48" opacity="0.05"></line><line x1="864" y1="0" x2="816" y2="48" opacity="0.05"></line><line x1="864" y1="0" x2="912" y2="48" opacity="0.05"></line><line x1="960" y1="0" x2="912" y2="48" opacity="0.05"></line><line x1="960" y1="0" x2="1008" y2="48" opacity="0.05"></line><line x1="1008" y1="0" x2="1056" y2="48" opacity="0.05"></line><line x1="1104" y1="0" x2="1056" y2="48" opacity="0.05"></line><line x1="1152" y1="0" x2="1104" y2="48" opacity="0.05"></line><line x1="1152" y1="0" x2="1200" y2="48" opacity="0.05"></line><line x1="1248" y1="0" x2="1200" y2="48" opacity="0.05"></line><line x1="1296" y1="0" x2="1248" y2="48" opacity="0.05"></line><line x1="1296" y1="0" x2="1344" y2="48" opacity="0.05"></line><line x1="1344" y1="0" x2="1392" y2="48" opacity="0.05"></line><line x1="1440" y1="0" x2="1392" y2="48" opacity="0.05"></line><line x1="0" y1="48" x2="48" y2="96" opacity="0.11"></line><line x1="96" y1="48" x2="48" y2="96" opacity="0.11"></line><line x1="96" y1="48" x2="144" y2="96" opacity="0.11"></line><line x1="192" y1="48" x2="144" y2="96" opacity="0.11"></line><line x1="192" y1="48" x2="240" y2="96" opacity="0.11"></line><line x1="240" y1="48" x2="288" y2="96" opacity="0.11"></line><line x1="288" y1="48" x2="336" y2="96" opacity="0.11"></line><line x1="336" y1="48" x2="384" y2="96" opacity="0.11"></line><line x1="432" y1="48" x2="384" y2="96" opacity="0.11"></line><line x1="432" y1="48" x2="480" y2="96" opacity="0.11"></line><line x1="528" y1="48" x2="480" y2="96" opacity="0.11"></line><line x1="576" y1="48" x2="528" y2="96" opacity="0.11"></line><line x1="624" y1="48" x2="576" y2="96" opacity="0.11"></line><line x1="624" y1="48" x2="672" y2="96" opacity="0.11"></line><line x1="672" y1="48" x2="720" y2="96" opacity="0.11"></line><line x1="720" y1="48" x2="768" y2="96" opacity="0.11"></line><line x1="768" y1="48" x2="816" y2="96" opacity="0.11"></line><line x1="816" y1="48" x2="864" y2="96" opacity="0.11"></line><line x1="912" y1="48" x2="864" y2="96" opacity="0.11"></line><line x1="912" y1="48" x2="960" y2="96" opacity="0.11"></line><line x1="1008" y1="48" x2="960" y2="96" opacity="0.11"></line><line x1="1056" y1="48" x2="1008" y2="96" opacity="0.11"></line><line x1="1104" y1="48" x2="1056" y2="96" opacity="0.11"></line><line x1="1152" y1="48" x2="1104" y2="96" opacity="0.11"></line><line x1="1152" y1="48" x2="1200" y2="96" opacity="0.11"></line><line x1="1200" y1="48" x2="1248" y2="96" opacity="0.11"></line><line x1="1296" y1="48" x2="1248" y2="96" opacity="0.11"></line><line x1="1296" y1="48" x2="1344" y2="96" opacity="0.11"></line><line x1="1344" y1="48" x2="1392" y2="96" opacity="0.11"></line><line x1="1440" y1="48" x2="1392" y2="96" opacity="0.11"></line><line x1="0" y1="96" x2="48" y2="144" opacity="0.16"></line><line x1="48" y1="96" x2="96" y2="144" opacity="0.16"></line><line x1="144" y1="96" x2="96" y2="144" opacity="0.16"></line><line x1="144" y1="96" x2="192" y2="144" opacity="0.16"></line><line x1="240" y1="96" x2="192" y2="144" opacity="0.16"></line><line x1="240" y1="96" x2="288" y2="144" opacity="0.16"></line><line x1="336" y1="96" x2="288" y2="144" opacity="0.16"></line><line x1="336" y1="96" x2="384" y2="144" opacity="0.16"></line><line x1="432" y1="96" x2="384" y2="144" opacity="0.16"></line><line x1="432" y1="96" x2="480" y2="144" opacity="0.16"></line><line x1="528" y1="96" x2="480" y2="144" opacity="0.16"></line><line x1="528" y1="96" x2="576" y2="144" opacity="0.16"></line><line x1="624" y1="96" x2="576" y2="144" opacity="0.16"></line><line x1="624" y1="96" x2="672" y2="144" opacity="0.16"></line><line x1="720" y1="96" x2="672" y2="144" opacity="0.16"></line><line x1="768" y1="96" x2="720" y2="144" opacity="0.16"></line><line x1="816" y1="96" x2="768" y2="144" opacity="0.16"></line><line x1="864" y1="96" x2="816" y2="144" opacity="0.16"></line><line x1="912" y1="96" x2="864" y2="144" opacity="0.16"></line><line x1="960" y1="96" x2="912" y2="144" opacity="0.16"></line><line x1="960" y1="96" x2="1008" y2="144" opacity="0.16"></line><line x1="1008" y1="96" x2="1056" y2="144" opacity="0.16"></line><line x1="1056" y1="96" x2="1104" y2="144" opacity="0.16"></line><line x1="1152" y1="96" x2="1104" y2="144" opacity="0.16"></line><line x1="1152" y1="96" x2="1200" y2="144" opacity="0.16"></line><line x1="1200" y1="96" x2="1248" y2="144" opacity="0.16"></line><line x1="1296" y1="96" x2="1248" y2="144" opacity="0.16"></line><line x1="1344" y1="96" x2="1296" y2="144" opacity="0.16"></line><line x1="1392" y1="96" x2="1344" y2="144" opacity="0.16"></line><line x1="1392" y1="96" x2="1440" y2="144" opacity="0.16"></line><line x1="48" y1="144" x2="0" y2="192" opacity="0.22"></line><line x1="48" y1="144" x2="96" y2="192" opacity="0.22"></line><line x1="144" y1="144" x2="96" y2="192" opacity="0.22"></line><line x1="192" y1="144" x2="144" y2="192" opacity="0.22"></line><line x1="192" y1="144" x2="240" y2="192" opacity="0.22"></line><line x1="288" y1="144" x2="240" y2="192" opacity="0.22"></line><line x1="336" y1="144" x2="288" y2="192" opacity="0.22"></line><line x1="384" y1="144" x2="336" y2="192" opacity="0.22"></line><line x1="432" y1="144" x2="384" y2="192" opacity="0.22"></line><line x1="432" y1="144" x2="480" y2="192" opacity="0.22"></line><line x1="480" y1="144" x2="528" y2="192" opacity="0.22"></line><line x1="576" y1="144" x2="528" y2="192" opacity="0.22"></line><line x1="576" y1="144" x2="624" y2="192" opacity="0.22"></line><line x1="624" y1="144" x2="672" y2="192" opacity="0.22"></line><line x1="720" y1="144" x2="672" y2="192" opacity="0.22"></line><line x1="768" y1="144" x2="720" y2="192" opacity="0.22"></line><line x1="768" y1="144" x2="816" y2="192" opacity="0.22"></line><line x1="816" y1="144" x2="864" y2="192" opacity="0.22"></line><line x1="912" y1="144" x2="864" y2="192" opacity="0.22"></line><line x1="960" y1="144" x2="912" y2="192" opacity="0.22"></line><line x1="960" y1="144" x2="1008" y2="192" opacity="0.22"></line><line x1="1008" y1="144" x2="1056" y2="192" opacity="0.22"></line><line x1="1056" y1="144" x2="1104" y2="192" opacity="0.22"></line><line x1="1152" y1="144" x2="1104" y2="192" opacity="0.22"></line><line x1="1200" y1="144" x2="1152" y2="192" opacity="0.22"></line><line x1="1200" y1="144" x2="1248" y2="192" opacity="0.22"></line><line x1="1296" y1="144" x2="1248" y2="192" opacity="0.22"></line><line x1="1344" y1="144" x2="1296" y2="192" opacity="0.22"></line><line x1="1392" y1="144" x2="1344" y2="192" opacity="0.22"></line><line x1="1440" y1="144" x2="1392" y2="192" opacity="0.22"></line><line x1="0" y1="192" x2="48" y2="240" opacity="0.28"></line><line x1="48" y1="192" x2="96" y2="240" opacity="0.28"></line><line x1="96" y1="192" x2="144" y2="240" opacity="0.28"></line><line x1="144" y1="192" x2="192" y2="240" opacity="0.28"></line><line x1="240" y1="192" x2="192" y2="240" opacity="0.28"></line><line x1="240" y1="192" x2="288" y2="240" opacity="0.28"></line><line x1="336" y1="192" x2="288" y2="240" opacity="0.28"></line><line x1="336" y1="192" x2="384" y2="240" opacity="0.28"></line><line x1="384" y1="192" x2="432" y2="240" opacity="0.28"></line><line x1="432" y1="192" x2="480" y2="240" opacity="0.28"></line><line x1="528" y1="192" x2="480" y2="240" opacity="0.28"></line><line x1="576" y1="192" x2="528" y2="240" opacity="0.28"></line><line x1="624" y1="192" x2="576" y2="240" opacity="0.28"></line><line x1="624" y1="192" x2="672" y2="240" opacity="0.28"></line><line x1="672" y1="192" x2="720" y2="240" opacity="0.28"></line><line x1="768" y1="192" x2="720" y2="240" opacity="0.28"></line><line x1="768" y1="192" x2="816" y2="240" opacity="0.28"></line><line x1="816" y1="192" x2="864" y2="240" opacity="0.28"></line><line x1="864" y1="192" x2="912" y2="240" opacity="0.28"></line><line x1="960" y1="192" x2="912" y2="240" opacity="0.28"></line><line x1="1008" y1="192" x2="960" y2="240" opacity="0.28"></line><line x1="1008" y1="192" x2="1056" y2="240" opacity="0.28"></line><line x1="1104" y1="192" x2="1056" y2="240" opacity="0.28"></line><line x1="1152" y1="192" x2="1104" y2="240" opacity="0.28"></line><line x1="1200" y1="192" x2="1152" y2="240" opacity="0.28"></line><line x1="1248" y1="192" x2="1200" y2="240" opacity="0.28"></line><line x1="1296" y1="192" x2="1248" y2="240" opacity="0.28"></line><line x1="1296" y1="192" x2="1344" y2="240" opacity="0.28"></line><line x1="1392" y1="192" x2="1344" y2="240" opacity="0.28"></line><line x1="1392" y1="192" x2="1440" y2="240" opacity="0.28"></line><line x1="0" y1="240" x2="48" y2="288" opacity="0.33"></line><line x1="48" y1="240" x2="96" y2="288" opacity="0.33"></line><line x1="96" y1="240" x2="144" y2="288" opacity="0.33"></line><line x1="192" y1="240" x2="144" y2="288" opacity="0.33"></line><line x1="240" y1="240" x2="192" y2="288" opacity="0.33"></line><line x1="240" y1="240" x2="288" y2="288" opacity="0.33"></line><line x1="288" y1="240" x2="336" y2="288" opacity="0.33"></line><line x1="336" y1="240" x2="384" y2="288" opacity="0.33"></line><line x1="432" y1="240" x2="384" y2="288" opacity="0.33"></line><line x1="432" y1="240" x2="480" y2="288" opacity="0.33"></line><line x1="528" y1="240" x2="480" y2="288" opacity="0.33"></line><line x1="576" y1="240" x2="528" y2="288" opacity="0.33"></line><line x1="624" y1="240" x2="576" y2="288" opacity="0.33"></line><line x1="624" y1="240" x2="672" y2="288" opacity="0.33"></line><line x1="720" y1="240" x2="672" y2="288" opacity="0.33"></line><line x1="768" y1="240" x2="720" y2="288" opacity="0.33"></line><line x1="768" y1="240" x2="816" y2="288" opacity="0.33"></line><line x1="816" y1="240" x2="864" y2="288" opacity="0.33"></line><line x1="864" y1="240" x2="912" y2="288" opacity="0.33"></line><line x1="912" y1="240" x2="960" y2="288" opacity="0.33"></line><line x1="960" y1="240" x2="1008" y2="288" opacity="0.33"></line><line x1="1056" y1="240" x2="1008" y2="288" opacity="0.33"></line><line x1="1104" y1="240" x2="1056" y2="288" opacity="0.33"></line><line x1="1152" y1="240" x2="1104" y2="288" opacity="0.33"></line><line x1="1200" y1="240" x2="1152" y2="288" opacity="0.33"></line><line x1="1248" y1="240" x2="1200" y2="288" opacity="0.33"></line><line x1="1248" y1="240" x2="1296" y2="288" opacity="0.33"></line><line x1="1296" y1="240" x2="1344" y2="288" opacity="0.33"></line><line x1="1344" y1="240" x2="1392" y2="288" opacity="0.33"></line><line x1="1392" y1="240" x2="1440" y2="288" opacity="0.33"></line><line x1="48" y1="288" x2="0" y2="336" opacity="0.39"></line><line x1="48" y1="288" x2="96" y2="336" opacity="0.39"></line><line x1="96" y1="288" x2="144" y2="336" opacity="0.39"></line><line x1="144" y1="288" x2="192" y2="336" opacity="0.39"></line><line x1="240" y1="288" x2="192" y2="336" opacity="0.39"></line><line x1="240" y1="288" x2="288" y2="336" opacity="0.39"></line><line x1="288" y1="288" x2="336" y2="336" opacity="0.39"></line><line x1="384" y1="288" x2="336" y2="336" opacity="0.39"></line><line x1="384" y1="288" x2="432" y2="336" opacity="0.39"></line><line x1="480" y1="288" x2="432" y2="336" opacity="0.39"></line><line x1="480" y1="288" x2="528" y2="336" opacity="0.39"></line><line x1="528" y1="288" x2="576" y2="336" opacity="0.39"></line><line x1="576" y1="288" x2="624" y2="336" opacity="0.39"></line><line x1="672" y1="288" x2="624" y2="336" opacity="0.39"></line><line x1="672" y1="288" x2="720" y2="336" opacity="0.39"></line><line x1="720" y1="288" x2="768" y2="336" opacity="0.39"></line><line x1="816" y1="288" x2="768" y2="336" opacity="0.39"></line><line x1="864" y1="288" x2="816" y2="336" opacity="0.39"></line><line x1="864" y1="288" x2="912" y2="336" opacity="0.39"></line><line x1="912" y1="288" x2="960" y2="336" opacity="0.39"></line><line x1="960" y1="288" x2="1008" y2="336" opacity="0.39"></line><line x1="1056" y1="288" x2="1008" y2="336" opacity="0.39"></line><line x1="1104" y1="288" x2="1056" y2="336" opacity="0.39"></line><line x1="1152" y1="288" x2="1104" y2="336" opacity="0.39"></line><line x1="1200" y1="288" x2="1152" y2="336" opacity="0.39"></line><line x1="1200" y1="288" x2="1248" y2="336" opacity="0.39"></line><line x1="1296" y1="288" x2="1248" y2="336" opacity="0.39"></line><line x1="1296" y1="288" x2="1344" y2="336" opacity="0.39"></line><line x1="1344" y1="288" x2="1392" y2="336" opacity="0.39"></line><line x1="1440" y1="288" x2="1392" y2="336" opacity="0.39"></line><line x1="0" y1="336" x2="48" y2="384" opacity="0.45"></line><line x1="48" y1="336" x2="96" y2="384" opacity="0.45"></line><line x1="144" y1="336" x2="96" y2="384" opacity="0.45"></line><line x1="192" y1="336" x2="144" y2="384" opacity="0.45"></line><line x1="192" y1="336" x2="240" y2="384" opacity="0.45"></line><line x1="288" y1="336" x2="240" y2="384" opacity="0.45"></line><line x1="288" y1="336" x2="336" y2="384" opacity="0.45"></line><line x1="336" y1="336" x2="384" y2="384" opacity="0.45"></line><line x1="384" y1="336" x2="432" y2="384" opacity="0.45"></line><line x1="432" y1="336" x2="480" y2="384" opacity="0.45"></line><line x1="528" y1="336" x2="480" y2="384" opacity="0.45"></line><line x1="576" y1="336" x2="528" y2="384" opacity="0.45"></line><line x1="576" y1="336" x2="624" y2="384" opacity="0.45"></line><line x1="624" y1="336" x2="672" y2="384" opacity="0.45"></line><line x1="672" y1="336" x2="720" y2="384" opacity="0.45"></line><line x1="720" y1="336" x2="768" y2="384" opacity="0.45"></line><line x1="816" y1="336" x2="768" y2="384" opacity="0.45"></line><line x1="816" y1="336" x2="864" y2="384" opacity="0.45"></line><line x1="864" y1="336" x2="912" y2="384" opacity="0.45"></line><line x1="912" y1="336" x2="960" y2="384" opacity="0.45"></line><line x1="1008" y1="336" x2="960" y2="384" opacity="0.45"></line><line x1="1056" y1="336" x2="1008" y2="384" opacity="0.45"></line><line x1="1104" y1="336" x2="1056" y2="384" opacity="0.45"></line><line x1="1152" y1="336" x2="1104" y2="384" opacity="0.45"></line><line x1="1200" y1="336" x2="1152" y2="384" opacity="0.45"></line><line x1="1200" y1="336" x2="1248" y2="384" opacity="0.45"></line><line x1="1296" y1="336" x2="1248" y2="384" opacity="0.45"></line><line x1="1296" y1="336" x2="1344" y2="384" opacity="0.45"></line><line x1="1392" y1="336" x2="1344" y2="384" opacity="0.45"></line><line x1="1440" y1="336" x2="1392" y2="384" opacity="0.45"></line><line x1="0" y1="384" x2="48" y2="432" opacity="0.51"></line><line x1="48" y1="384" x2="96" y2="432" opacity="0.51"></line><line x1="96" y1="384" x2="144" y2="432" opacity="0.51"></line><line x1="192" y1="384" x2="144" y2="432" opacity="0.51"></line><line x1="192" y1="384" x2="240" y2="432" opacity="0.51"></line><line x1="240" y1="384" x2="288" y2="432" opacity="0.51"></line><line x1="288" y1="384" x2="336" y2="432" opacity="0.51"></line><line x1="336" y1="384" x2="384" y2="432" opacity="0.51"></line><line x1="384" y1="384" x2="432" y2="432" opacity="0.51"></line><line x1="432" y1="384" x2="480" y2="432" opacity="0.51"></line><line x1="480" y1="384" x2="528" y2="432" opacity="0.51"></line><line x1="576" y1="384" x2="528" y2="432" opacity="0.51"></line><line x1="624" y1="384" x2="576" y2="432" opacity="0.51"></line><line x1="624" y1="384" x2="672" y2="432" opacity="0.51"></line><line x1="672" y1="384" x2="720" y2="432" opacity="0.51"></line><line x1="720" y1="384" x2="768" y2="432" opacity="0.51"></line><line x1="768" y1="384" x2="816" y2="432" opacity="0.51"></line><line x1="864" y1="384" x2="816" y2="432" opacity="0.51"></line><line x1="864" y1="384" x2="912" y2="432" opacity="0.51"></line><line x1="912" y1="384" x2="960" y2="432" opacity="0.51"></line><line x1="1008" y1="384" x2="960" y2="432" opacity="0.51"></line><line x1="1056" y1="384" x2="1008" y2="432" opacity="0.51"></line><line x1="1104" y1="384" x2="1056" y2="432" opacity="0.51"></line><line x1="1104" y1="384" x2="1152" y2="432" opacity="0.51"></line><line x1="1200" y1="384" x2="1152" y2="432" opacity="0.51"></line><line x1="1248" y1="384" x2="1200" y2="432" opacity="0.51"></line><line x1="1248" y1="384" x2="1296" y2="432" opacity="0.51"></line><line x1="1344" y1="384" x2="1296" y2="432" opacity="0.51"></line><line x1="1344" y1="384" x2="1392" y2="432" opacity="0.51"></line><line x1="1440" y1="384" x2="1392" y2="432" opacity="0.51"></line><line x1="0" y1="432" x2="48" y2="480" opacity="0.56"></line><line x1="48" y1="432" x2="96" y2="480" opacity="0.56"></line><line x1="96" y1="432" x2="144" y2="480" opacity="0.56"></line><line x1="144" y1="432" x2="192" y2="480" opacity="0.56"></line><line x1="240" y1="432" x2="192" y2="480" opacity="0.56"></line><line x1="240" y1="432" x2="288" y2="480" opacity="0.56"></line><line x1="288" y1="432" x2="336" y2="480" opacity="0.56"></line><line x1="384" y1="432" x2="336" y2="480" opacity="0.56"></line><line x1="384" y1="432" x2="432" y2="480" opacity="0.56"></line><line x1="480" y1="432" x2="432" y2="480" opacity="0.56"></line><line x1="480" y1="432" x2="528" y2="480" opacity="0.56"></line><line x1="576" y1="432" x2="528" y2="480" opacity="0.56"></line><line x1="576" y1="432" x2="624" y2="480" opacity="0.56"></line><line x1="624" y1="432" x2="672" y2="480" opacity="0.56"></line><line x1="720" y1="432" x2="672" y2="480" opacity="0.56"></line><line x1="720" y1="432" x2="768" y2="480" opacity="0.56"></line><line x1="768" y1="432" x2="816" y2="480" opacity="0.56"></line><line x1="816" y1="432" x2="864" y2="480" opacity="0.56"></line><line x1="912" y1="432" x2="864" y2="480" opacity="0.56"></line><line x1="960" y1="432" x2="912" y2="480" opacity="0.56"></line><line x1="960" y1="432" x2="1008" y2="480" opacity="0.56"></line><line x1="1008" y1="432" x2="1056" y2="480" opacity="0.56"></line><line x1="1056" y1="432" x2="1104" y2="480" opacity="0.56"></line><line x1="1104" y1="432" x2="1152" y2="480" opacity="0.56"></line><line x1="1200" y1="432" x2="1152" y2="480" opacity="0.56"></line><line x1="1200" y1="432" x2="1248" y2="480" opacity="0.56"></line><line x1="1296" y1="432" x2="1248" y2="480" opacity="0.56"></line><line x1="1344" y1="432" x2="1296" y2="480" opacity="0.56"></line><line x1="1392" y1="432" x2="1344" y2="480" opacity="0.56"></line><line x1="1440" y1="432" x2="1392" y2="480" opacity="0.56"></line><line x1="48" y1="480" x2="0" y2="528" opacity="0.62"></line><line x1="96" y1="480" x2="48" y2="528" opacity="0.62"></line><line x1="96" y1="480" x2="144" y2="528" opacity="0.62"></line><line x1="192" y1="480" x2="144" y2="528" opacity="0.62"></line><line x1="240" y1="480" x2="192" y2="528" opacity="0.62"></line><line x1="288" y1="480" x2="240" y2="528" opacity="0.62"></line><line x1="336" y1="480" x2="288" y2="528" opacity="0.62"></line><line x1="384" y1="480" x2="336" y2="528" opacity="0.62"></line><line x1="432" y1="480" x2="384" y2="528" opacity="0.62"></line><line x1="432" y1="480" x2="480" y2="528" opacity="0.62"></line><line x1="480" y1="480" x2="528" y2="528" opacity="0.62"></line><line x1="528" y1="480" x2="576" y2="528" opacity="0.62"></line><line x1="576" y1="480" x2="624" y2="528" opacity="0.62"></line><line x1="672" y1="480" x2="624" y2="528" opacity="0.62"></line><line x1="720" y1="480" x2="672" y2="528" opacity="0.62"></line><line x1="768" y1="480" x2="720" y2="528" opacity="0.62"></line><line x1="768" y1="480" x2="816" y2="528" opacity="0.62"></line><line x1="816" y1="480" x2="864" y2="528" opacity="0.62"></line><line x1="864" y1="480" x2="912" y2="528" opacity="0.62"></line><line x1="960" y1="480" x2="912" y2="528" opacity="0.62"></line><line x1="1008" y1="480" x2="960" y2="528" opacity="0.62"></line><line x1="1008" y1="480" x2="1056" y2="528" opacity="0.62"></line><line x1="1104" y1="480" x2="1056" y2="528" opacity="0.62"></line><line x1="1104" y1="480" x2="1152" y2="528" opacity="0.62"></line><line x1="1152" y1="480" x2="1200" y2="528" opacity="0.62"></line><line x1="1200" y1="480" x2="1248" y2="528" opacity="0.62"></line><line x1="1248" y1="480" x2="1296" y2="528" opacity="0.62"></line><line x1="1344" y1="480" x2="1296" y2="528" opacity="0.62"></line><line x1="1392" y1="480" x2="1344" y2="528" opacity="0.62"></line><line x1="1392" y1="480" x2="1440" y2="528" opacity="0.62"></line><line x1="48" y1="528" x2="0" y2="576" opacity="0.68"></line><line x1="48" y1="528" x2="96" y2="576" opacity="0.68"></line><line x1="144" y1="528" x2="96" y2="576" opacity="0.68"></line><line x1="144" y1="528" x2="192" y2="576" opacity="0.68"></line><line x1="240" y1="528" x2="192" y2="576" opacity="0.68"></line><line x1="240" y1="528" x2="288" y2="576" opacity="0.68"></line><line x1="288" y1="528" x2="336" y2="576" opacity="0.68"></line><line x1="384" y1="528" x2="336" y2="576" opacity="0.68"></line><line x1="384" y1="528" x2="432" y2="576" opacity="0.68"></line><line x1="480" y1="528" x2="432" y2="576" opacity="0.68"></line><line x1="528" y1="528" x2="480" y2="576" opacity="0.68"></line><line x1="528" y1="528" x2="576" y2="576" opacity="0.68"></line><line x1="624" y1="528" x2="576" y2="576" opacity="0.68"></line><line x1="624" y1="528" x2="672" y2="576" opacity="0.68"></line><line x1="672" y1="528" x2="720" y2="576" opacity="0.68"></line><line x1="768" y1="528" x2="720" y2="576" opacity="0.68"></line><line x1="816" y1="528" x2="768" y2="576" opacity="0.68"></line><line x1="864" y1="528" x2="816" y2="576" opacity="0.68"></line><line x1="864" y1="528" x2="912" y2="576" opacity="0.68"></line><line x1="960" y1="528" x2="912" y2="576" opacity="0.68"></line><line x1="1008" y1="528" x2="960" y2="576" opacity="0.68"></line><line x1="1056" y1="528" x2="1008" y2="576" opacity="0.68"></line><line x1="1056" y1="528" x2="1104" y2="576" opacity="0.68"></line><line x1="1104" y1="528" x2="1152" y2="576" opacity="0.68"></line><line x1="1200" y1="528" x2="1152" y2="576" opacity="0.68"></line><line x1="1248" y1="528" x2="1200" y2="576" opacity="0.68"></line><line x1="1296" y1="528" x2="1248" y2="576" opacity="0.68"></line><line x1="1296" y1="528" x2="1344" y2="576" opacity="0.68"></line><line x1="1392" y1="528" x2="1344" y2="576" opacity="0.68"></line><line x1="1440" y1="528" x2="1392" y2="576" opacity="0.68"></line><line x1="48" y1="576" x2="0" y2="624" opacity="0.73"></line><line x1="96" y1="576" x2="48" y2="624" opacity="0.73"></line><line x1="96" y1="576" x2="144" y2="624" opacity="0.73"></line><line x1="144" y1="576" x2="192" y2="624" opacity="0.73"></line><line x1="192" y1="576" x2="240" y2="624" opacity="0.73"></line><line x1="288" y1="576" x2="240" y2="624" opacity="0.73"></line><line x1="336" y1="576" x2="288" y2="624" opacity="0.73"></line><line x1="384" y1="576" x2="336" y2="624" opacity="0.73"></line><line x1="432" y1="576" x2="384" y2="624" opacity="0.73"></line><line x1="432" y1="576" x2="480" y2="624" opacity="0.73"></line><line x1="480" y1="576" x2="528" y2="624" opacity="0.73"></line><line x1="528" y1="576" x2="576" y2="624" opacity="0.73"></line><line x1="624" y1="576" x2="576" y2="624" opacity="0.73"></line><line x1="624" y1="576" x2="672" y2="624" opacity="0.73"></line><line x1="672" y1="576" x2="720" y2="624" opacity="0.73"></line><line x1="768" y1="576" x2="720" y2="624" opacity="0.73"></line><line x1="816" y1="576" x2="768" y2="624" opacity="0.73"></line><line x1="864" y1="576" x2="816" y2="624" opacity="0.73"></line><line x1="864" y1="576" x2="912" y2="624" opacity="0.73"></line><line x1="912" y1="576" x2="960" y2="624" opacity="0.73"></line><line x1="1008" y1="576" x2="960" y2="624" opacity="0.73"></line><line x1="1056" y1="576" x2="1008" y2="624" opacity="0.73"></line><line x1="1104" y1="576" x2="1056" y2="624" opacity="0.73"></line><line x1="1104" y1="576" x2="1152" y2="624" opacity="0.73"></line><line x1="1152" y1="576" x2="1200" y2="624" opacity="0.73"></line><line x1="1200" y1="576" x2="1248" y2="624" opacity="0.73"></line><line x1="1248" y1="576" x2="1296" y2="624" opacity="0.73"></line><line x1="1344" y1="576" x2="1296" y2="624" opacity="0.73"></line><line x1="1392" y1="576" x2="1344" y2="624" opacity="0.73"></line><line x1="1392" y1="576" x2="1440" y2="624" opacity="0.73"></line><line x1="0" y1="624" x2="48" y2="672" opacity="0.79"></line><line x1="96" y1="624" x2="48" y2="672" opacity="0.79"></line><line x1="96" y1="624" x2="144" y2="672" opacity="0.79"></line><line x1="192" y1="624" x2="144" y2="672" opacity="0.79"></line><line x1="240" y1="624" x2="192" y2="672" opacity="0.79"></line><line x1="240" y1="624" x2="288" y2="672" opacity="0.79"></line><line x1="288" y1="624" x2="336" y2="672" opacity="0.79"></line><line x1="336" y1="624" x2="384" y2="672" opacity="0.79"></line><line x1="384" y1="624" x2="432" y2="672" opacity="0.79"></line><line x1="480" y1="624" x2="432" y2="672" opacity="0.79"></line><line x1="480" y1="624" x2="528" y2="672" opacity="0.79"></line><line x1="528" y1="624" x2="576" y2="672" opacity="0.79"></line><line x1="624" y1="624" x2="576" y2="672" opacity="0.79"></line><line x1="624" y1="624" x2="672" y2="672" opacity="0.79"></line><line x1="720" y1="624" x2="672" y2="672" opacity="0.79"></line><line x1="720" y1="624" x2="768" y2="672" opacity="0.79"></line><line x1="816" y1="624" x2="768" y2="672" opacity="0.79"></line><line x1="816" y1="624" x2="864" y2="672" opacity="0.79"></line><line x1="912" y1="624" x2="864" y2="672" opacity="0.79"></line><line x1="912" y1="624" x2="960" y2="672" opacity="0.79"></line><line x1="960" y1="624" x2="1008" y2="672" opacity="0.79"></line><line x1="1056" y1="624" x2="1008" y2="672" opacity="0.79"></line><line x1="1056" y1="624" x2="1104" y2="672" opacity="0.79"></line><line x1="1152" y1="624" x2="1104" y2="672" opacity="0.79"></line><line x1="1200" y1="624" x2="1152" y2="672" opacity="0.79"></line><line x1="1248" y1="624" x2="1200" y2="672" opacity="0.79"></line><line x1="1296" y1="624" x2="1248" y2="672" opacity="0.79"></line><line x1="1296" y1="624" x2="1344" y2="672" opacity="0.79"></line><line x1="1392" y1="624" x2="1344" y2="672" opacity="0.79"></line><line x1="1440" y1="624" x2="1392" y2="672" opacity="0.79"></line><line x1="48" y1="672" x2="0" y2="720" opacity="0.85"></line><line x1="96" y1="672" x2="48" y2="720" opacity="0.85"></line><line x1="144" y1="672" x2="96" y2="720" opacity="0.85"></line><line x1="192" y1="672" x2="144" y2="720" opacity="0.85"></line><line x1="240" y1="672" x2="192" y2="720" opacity="0.85"></line><line x1="288" y1="672" x2="240" y2="720" opacity="0.85"></line><line x1="336" y1="672" x2="288" y2="720" opacity="0.85"></line><line x1="384" y1="672" x2="336" y2="720" opacity="0.85"></line><line x1="384" y1="672" x2="432" y2="720" opacity="0.85"></line><line x1="480" y1="672" x2="432" y2="720" opacity="0.85"></line><line x1="528" y1="672" x2="480" y2="720" opacity="0.85"></line><line x1="576" y1="672" x2="528" y2="720" opacity="0.85"></line><line x1="576" y1="672" x2="624" y2="720" opacity="0.85"></line><line x1="624" y1="672" x2="672" y2="720" opacity="0.85"></line><line x1="720" y1="672" x2="672" y2="720" opacity="0.85"></line><line x1="720" y1="672" x2="768" y2="720" opacity="0.85"></line><line x1="816" y1="672" x2="768" y2="720" opacity="0.85"></line><line x1="864" y1="672" x2="816" y2="720" opacity="0.85"></line><line x1="912" y1="672" x2="864" y2="720" opacity="0.85"></line><line x1="912" y1="672" x2="960" y2="720" opacity="0.85"></line><line x1="960" y1="672" x2="1008" y2="720" opacity="0.85"></line><line x1="1056" y1="672" x2="1008" y2="720" opacity="0.85"></line><line x1="1104" y1="672" x2="1056" y2="720" opacity="0.85"></line><line x1="1104" y1="672" x2="1152" y2="720" opacity="0.85"></line><line x1="1152" y1="672" x2="1200" y2="720" opacity="0.85"></line><line x1="1248" y1="672" x2="1200" y2="720" opacity="0.85"></line><line x1="1248" y1="672" x2="1296" y2="720" opacity="0.85"></line><line x1="1296" y1="672" x2="1344" y2="720" opacity="0.85"></line><line x1="1344" y1="672" x2="1392" y2="720" opacity="0.85"></line><line x1="1392" y1="672" x2="1440" y2="720" opacity="0.85"></line><line x1="0" y1="720" x2="48" y2="768" opacity="0.91"></line><line x1="48" y1="720" x2="96" y2="768" opacity="0.91"></line><line x1="96" y1="720" x2="144" y2="768" opacity="0.91"></line><line x1="144" y1="720" x2="192" y2="768" opacity="0.91"></line><line x1="240" y1="720" x2="192" y2="768" opacity="0.91"></line><line x1="288" y1="720" x2="240" y2="768" opacity="0.91"></line><line x1="288" y1="720" x2="336" y2="768" opacity="0.91"></line><line x1="336" y1="720" x2="384" y2="768" opacity="0.91"></line><line x1="384" y1="720" x2="432" y2="768" opacity="0.91"></line><line x1="432" y1="720" x2="480" y2="768" opacity="0.91"></line><line x1="528" y1="720" x2="480" y2="768" opacity="0.91"></line><line x1="528" y1="720" x2="576" y2="768" opacity="0.91"></line><line x1="576" y1="720" x2="624" y2="768" opacity="0.91"></line><line x1="672" y1="720" x2="624" y2="768" opacity="0.91"></line><line x1="672" y1="720" x2="720" y2="768" opacity="0.91"></line><line x1="768" y1="720" x2="720" y2="768" opacity="0.91"></line><line x1="768" y1="720" x2="816" y2="768" opacity="0.91"></line><line x1="864" y1="720" x2="816" y2="768" opacity="0.91"></line><line x1="912" y1="720" x2="864" y2="768" opacity="0.91"></line><line x1="960" y1="720" x2="912" y2="768" opacity="0.91"></line><line x1="960" y1="720" x2="1008" y2="768" opacity="0.91"></line><line x1="1008" y1="720" x2="1056" y2="768" opacity="0.91"></line><line x1="1056" y1="720" x2="1104" y2="768" opacity="0.91"></line><line x1="1104" y1="720" x2="1152" y2="768" opacity="0.91"></line><line x1="1152" y1="720" x2="1200" y2="768" opacity="0.91"></line><line x1="1200" y1="720" x2="1248" y2="768" opacity="0.91"></line><line x1="1248" y1="720" x2="1296" y2="768" opacity="0.91"></line><line x1="1344" y1="720" x2="1296" y2="768" opacity="0.91"></line><line x1="1392" y1="720" x2="1344" y2="768" opacity="0.91"></line><line x1="1392" y1="720" x2="1440" y2="768" opacity="0.91"></line><line x1="48" y1="768" x2="0" y2="816" opacity="0.96"></line><line x1="48" y1="768" x2="96" y2="816" opacity="0.96"></line><line x1="144" y1="768" x2="96" y2="816" opacity="0.96"></line><line x1="144" y1="768" x2="192" y2="816" opacity="0.96"></line><line x1="192" y1="768" x2="240" y2="816" opacity="0.96"></line><line x1="240" y1="768" x2="288" y2="816" opacity="0.96"></line><line x1="336" y1="768" x2="288" y2="816" opacity="0.96"></line><line x1="384" y1="768" x2="336" y2="816" opacity="0.96"></line><line x1="432" y1="768" x2="384" y2="816" opacity="0.96"></line><line x1="480" y1="768" x2="432" y2="816" opacity="0.96"></line><line x1="480" y1="768" x2="528" y2="816" opacity="0.96"></line><line x1="576" y1="768" x2="528" y2="816" opacity="0.96"></line><line x1="624" y1="768" x2="576" y2="816" opacity="0.96"></line><line x1="672" y1="768" x2="624" y2="816" opacity="0.96"></line><line x1="720" y1="768" x2="672" y2="816" opacity="0.96"></line><line x1="720" y1="768" x2="768" y2="816" opacity="0.96"></line><line x1="768" y1="768" x2="816" y2="816" opacity="0.96"></line><line x1="864" y1="768" x2="816" y2="816" opacity="0.96"></line><line x1="864" y1="768" x2="912" y2="816" opacity="0.96"></line><line x1="912" y1="768" x2="960" y2="816" opacity="0.96"></line><line x1="1008" y1="768" x2="960" y2="816" opacity="0.96"></line><line x1="1056" y1="768" x2="1008" y2="816" opacity="0.96"></line><line x1="1104" y1="768" x2="1056" y2="816" opacity="0.96"></line><line x1="1104" y1="768" x2="1152" y2="816" opacity="0.96"></line><line x1="1152" y1="768" x2="1200" y2="816" opacity="0.96"></line><line x1="1200" y1="768" x2="1248" y2="816" opacity="0.96"></line><line x1="1296" y1="768" x2="1248" y2="816" opacity="0.96"></line><line x1="1296" y1="768" x2="1344" y2="816" opacity="0.96"></line><line x1="1392" y1="768" x2="1344" y2="816" opacity="0.96"></line><line x1="1392" y1="768" x2="1440" y2="816" opacity="0.96"></line></g></svg>
  <div class="container">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <div class="separator"></div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="accordion" id="faqs-content">
          <div class="card">
            <div class="card-header">
              <h4 data-toggle="collapse" data-target="#item1"> What is Lorem Ipsum?</h4>
            </div>
            <div id="item1" class="collapse show" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4 class="collapsed" data-toggle="collapse" data-target="#item2">Where does it come from?</h4>
            </div>
            <div id="item2" class="collapse show" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                </p>
                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4 class="collapsed" data-toggle="collapse" data-target="#item3">Why do we use it?</h4>
            </div>
            <div id="item3" class="collapse" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout.
                </p>
                <p>
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4 class="collapsed" data-toggle="collapse" data-target="#item4">Where can I get some?</h4>
            </div>
            <div id="item4" class="collapse" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don't look even slightly believable.
                </p>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need
                  to be sure there isn't anything embarrassing hidden in the
                  middle of text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
})


export class QuestionsComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
