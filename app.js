"use strict";
const dc = document;
// Areas
setInterval(() => {
  //square
  let a = dc.getElementById("sa_in").value;
  let b = document.getElementById("square_area");
  b.innerHTML = Math.pow(a, 2).toFixed(9);
  //rectangle
  let c = dc.getElementById("re_ix").value;
  let d = dc.getElementById("re_iy").value;
  let e = dc.getElementById("rtangle_area");
  e.innerHTML = (c * d).toFixed(9);
  //circle
  let f = dc.getElementById("ci_in").value;
  let g = dc.getElementById("circle_area");
  g.innerHTML = (Math.pow(f, 2) * Math.PI).toFixed(9);
  // Triangle
  const h = 0.5;
  let i = dc.getElementById("tr_b").value;
  let j = dc.getElementById("tr_h").value;
  let k = dc.getElementById("triangle_area");
  k.innerHTML = (h * i * j).toFixed(9);
  // Ellipse
  let l = dc.getElementById("el_y").value;
  let m = dc.getElementById("el_x").value;
  let n = dc.getElementById("ellipse_area");
  n.innerHTML = (Math.PI * l * m).toFixed(9);
  // Parallelogram
  let o = dc.getElementById("pa_b").value;
  let p = dc.getElementById("pa_h").value;
  let q = dc.getElementById("parallelogram_area");
  q.innerHTML = (o * p).toFixed(9);
  // Trapezium
  let r = dc.getElementById("ta_a").value;
  let s = dc.getElementById("ta_b").value;
  let t = dc.getElementById("ta_h").value;
  let u = dc.getElementById("trapezium_area");
  u.innerHTML = (0.5 * (r + s) * t).toFixed(9);
  // Cube
  let w = dc.getElementById("cu_s").value;
  let y = dc.getElementById("cube_area");
  y.innerHTML = (6 * Math.pow(w, 2)).toFixed(9);
  // Cuboid
  let z = dc.getElementById("cb_l").value;
  let aa = dc.getElementById("cb_w").value;
  let ab = dc.getElementById("cb_h").value;
  let ac = dc.getElementById("cuboid_area");
  ac.innerHTML = (2 * (z * aa + z * ab + aa * ab)).toFixed(9);
}, 1000);
// Volumes
setInterval(() => {
  // cube
  let a = dc.getElementById("c_vol").value;
  let b = dc.getElementById("volume_cube_result");
  b.innerHTML = Math.pow(a, 3);
  // cuboid
  let c = dc.getElementById("cboid_a").value;
  let d = dc.getElementById("cboid_b").value;
  let e = dc.getElementById("cboid_c").value;
  let f = dc.getElementById("volume_cuboid_result");
  f.innerHTML = c * d * e;
  // Prism
  let g = dc.getElementById("prism_B").value;
  let h = dc.getElementById("prism_h").value;
  let i = dc.getElementById("volume_prism_result");
  i.innerHTML = g * h;
  // Pyramid
  let j = dc.getElementById("pyramid_B").value;
  let k = dc.getElementById("pyramid_h").value;
  let l = dc.getElementById("volume_pyramid_result");
  l.innerHTML = (1 / 3) * (j * k);
  // Parallelepiped
  let m = dc.getElementById("para_a").value;
  let n = dc.getElementById("para_b").value;
  let o = dc.getElementById("para_c").value;
  let p = dc.getElementById("para_al").value;
  let r = dc.getElementById("para_be").value;
  let s = dc.getElementById("para_ga").value;
  let t = dc.getElementById("volume_parallelepiped_result"); 
  t.innerHTML = (m * n * o) * (Math.sqrt(
    1 + 2 * (Math.cos(p) + Math.cos(r) + Math.cos(s) - Math.pow(Math.cos(p),2) - Math.pow(Math.cos(r), 2) - Math.pow(Math.cos(s), 2))
  ))
  let u = dc.getElementById("tetrahedron_a").value; 
  let v = dc.getElementById("volume_tetrahedron_result"); 
  v.innerHTML = (Math.sqrt(2)/12) * Math.pow(u, 3); 
}, 1000);
// Formulas
setInterval(() => {
  // Quadratic
  let a = dc.getElementById("fq_a").value;
  let b = dc.getElementById("fq_b").value;
  let c = dc.getElementById("fq_c").value;
  let d = dc.getElementById("quadratic_result");
  let e = dc.getElementById("quadratic_result_2");
  d.innerHTML = ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
  e.innerHTML = ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
  // Distance formula
  let f = dc.getElementById("df_x1").value;
  let g = dc.getElementById("df_x2").value;
  let h = dc.getElementById("df_y1").value;
  let i = dc.getElementById("df_y2").value;
  let j = dc.getElementById("distance_formula");
  j.innerHTML = Math.sqrt(Math.pow(g - f, 2) + Math.pow(i - h, 2));
  // Mid-point formula
  let k = Number(dc.getElementById("mp_x1").value);
  let l = Number(dc.getElementById("mp_x2").value);
  let m = Number(dc.getElementById("mp_y1").value);
  let n = Number(dc.getElementById("mp_y2").value);
  let o = dc.getElementById("mp_formula");
  o.innerHTML = "(" + (k + l) / 2 + " , " + (m + n) / 2 + ")";
  // Arccosine
  let p = dc.getElementById("arccot_x");
  let q = dc.getElementById("arccot");
  q.innerHTML = Math.acos(p.value);
  // Slope of a line
  let r = Number(dc.getElementById("sl_x1").value);
  let t = Number(dc.getElementById("sl_x2").value);
  let u = Number(dc.getElementById("sl_y1").value);
  let v = Number(dc.getElementById("sl_y2").value);
  let w = dc.getElementById("soal");
  w.innerHTML = v - u / t - r;
  // Celsius to Fahrenheit
  let x = dc.getElementById("c_to_f").value;
  let y = dc.getElementById("f_result");
  y.innerHTML = (x * 9) / 5 + 32;
  // Fahrenheit  to Celsuis
  let z = dc.getElementById("f_to_c").value;
  let ab = dc.getElementById("c_result");
  ab.innerHTML = ((z - 32) * 5) / 9;
  // Celsius to Kelvin
  let ac = dc.getElementById("c_to_k").value;
  let ad = dc.getElementById("k_result");
  ad.innerHTML = Number(ac) + 273.15;
  // Kelvin to Celsius
  let ae = dc.getElementById("k_to_c").value;
  let af = dc.getElementById("k2_result");
  af.innerHTML = ae - 273.15;
  // Sine
  let ag = dc.getElementById("sin_x").value;
  let ah = dc.getElementById("sin");
  ah.innerHTML = Math.sin(ag);
  // Kelvin to Fahrenheit
  let ai = dc.getElementById("k_to_f").value;
  let aj = dc.getElementById("k3_result");
  aj.innerHTML = (((ai - 273.15) * 9) / 5 + 32).toFixed(5);
  // Fahrenheit to Kelvin
  let ak = dc.getElementById("f_to_k").value;
  let al = dc.getElementById("f2_result");
  al.innerHTML = ((ak - 32) * (5 / 9) + 273.15).toFixed(5);
}, 1000);

setInterval(() => {
  let nav = document.querySelector("nav");
  nav.style.width = `${window.innerWidth * 0.13}px`;
}, 1);
