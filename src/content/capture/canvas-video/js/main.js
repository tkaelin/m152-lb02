

/* global main */

'use strict';

main();

const canvas = document.querySelector('canvas');
const video = document.querySelector('video');

const stream = canvas.captureStream();
video.srcObject = stream;
