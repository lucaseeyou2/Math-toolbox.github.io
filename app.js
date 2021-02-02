"use strict";
const dc = document;
setInterval(calculateArea, 1000);
function calculateArea() {
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
};
setInterval(calculateFormula, 1000);
function calculateFormula() {
  //Quadratic
  let a = dc.getElementById("fq_a").value;
  let b = dc.getElementById("fq_b").value;
  let c = dc.getElementById("fq_c").value;
  let d = dc.getElementById("quadratic_result");
  let e = dc.getElementById("quadratic_result_2");
  d.innerHTML = (((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a);
  e.innerHTML = (((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a);
  // Distance formula 
  let f = dc.getElementById("df_x1").value; 
  let g = dc.getElementById("df_x2").value; 
  let h = dc.getElementById("df_y1").value; 
  let i = dc.getElementById("df_y2").value; 
  let j = dc.getElementById("distance_formula"); 
  j.innerHTML = (Math.sqrt(Math.pow((g - f), 2) + Math.pow((i - h),2)));
  // Mid-point formula 
  let k = Number (dc.getElementById("mp_x1").value);
  let l = Number (dc.getElementById("mp_x2").value);
  let m = Number (dc.getElementById("mp_y1").value);
  let n = Number (dc.getElementById("mp_y2").value);
  let o = dc.getElementById("mp_formula"); 
  o.innerHTML = "(" + ((k + l)/2) + " , " + ((m + n)/2) + ")"; 
  // Arccosine
  let p = dc.getElementById("arccot_x"); 
  let q = dc.getElementById("arccot"); 

  q.innerHTML = Math.acos(p.value)
};
