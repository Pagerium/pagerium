<p align="center">
    <a href="https://www.npmjs.com/package/pagerium">
        <img src="https://github.com/Pagerium/media/blob/main/logo.png" alt="pagerium" >
    </a>
</p>
<h3 align="center">Pagerium.js - new web framework for creating sites.</h3>
<h3 align="center">
    This framework is in beta stage!
</h3>
<div align="center">

[![npm-version](https://img.shields.io/npm/v/pagerium)](https://www.npmjs.com/package/pagerium)
[![repo-size](https://img.shields.io/github/repo-size/Pagerium/pagerium)](https://github.com/Pagerium/pagerium)
[![license](https://img.shields.io/npm/l/pagerium)](https://github.com/Pagerium/pagerium/blob/main/LICENSE)

</div>


## Table of contents
- [Installation](#installation)
- [Start framework](#start)
- [Component](#component)
- [Animation](#animation)
- [Cycle](#cycle)
- [Operators](#operators)
    - [Addition](#addition)
    - [If](#if)
    - [Ternary](#ternary)
- [License](#license)

<div id='installation'></div>

## Installation

```bash
npm i -D pagerium 
```

<div id='start'></div>

## Start framework

```javascript
import { Pagerium } from 'pagerium';

new Pagerium("#page").render(`
    {{component}}
`,{
    component
});
```
<div id='component'></div>

## Component

```javascript
import { PageriumComponent } from 'pagerium';
const component = new PageriumComponent("new-component", 
`<div class="component">
    {{component_text}}
</div>`,
{
    script:[(elements)=>{
      console.log(elements.component);
    },
    {
        start:'afterLoad',
        elements:[
            {component:".component"}
        ]
    }],
    data:{
        component_text:"Text"
    },
    style:`
        .component{
            width:100px;
            height:100px;
        }
    `
});
```
<div id='animation'></div>

## Animation

```javascript
import { PageriumAnimation } from 'pagerium';
const animation = new PageriumAnimation("new-animation",'new-component',
{
    event:"click",
    styleAnimation:`width:200px;`,
    class:"animation-class",
    transition:"2s all"
});
```
<div id='cycle'></div>

## Cycle

```javascript
import { PageriumCycle } from 'pagerium';
const cycle = new PageriumCycle("new-cycle",['new-component'],2);
```
<div id='operators'></div>

## Operators
<div id='addition'></div>

### Addition

```javascript
import { PageriumAddition } from 'pagerium';
const addition = new PageriumAddition("new-addition",['new-component', 'new-component']);
```
<div id='if'></div>

### If

```javascript
import { PageriumIf } from 'pagerium';
const newIf = new PageriumIf("new-if",['new-component'],true);
```
<div id='ternary'></div>

### Ternary

```javascript
import { PageriumTernary } from 'pagerium';
const ternary = new PageriumTernary("new-ternary",['new-component', 'new-component'],true);
```

<div id='license'></div>

## License
[Licensed under MIT](https://github.com/Pagerium/pagerium/blob/main/LICENSE)
