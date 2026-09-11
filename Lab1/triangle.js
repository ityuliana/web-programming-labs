console.log("Розв'язання прямокутного трикутника");
console.log("Виклик функції: triangle(значення1, тип1, значення2, тип2)");
console.log("Можливі типи:");
console.log("leg - катет");
console.log("hypotenuse - гіпотенуза");
console.log("adjacent angle - прилеглий до катета кут (використовується разом з leg)");
console.log("opposite angle - протилежний катету кут (використовується разом з leg)");
console.log("angle - гострий кут (використовується разом з hypotenuse)");
console.log("Приклад");

function triangle(val1, type1, val2, type2) {
 function toRad(deg) { return deg * Math.PI / 180; }

function toDeg(rad) { return rad * 180 / Math.PI; }

function isValidType(type) {
  if (type === "leg") return true;
  if (type === "hypotenuse") return true;
  if (type === "angle") return true;
  if (type === "adjacent angle") return true;
  if (type === "opposite angle") return true;
  return false;
}

if (isValidType(type1) === false || isValidType(type2) === false) {
  console.log("failed");
  return "failed";
}

  function getValue(type) {
    if (type1 === type) return val1;
    if (type2 === type) return val2;
    return null;
  }

  let leg = getValue("leg");
  let hyp = getValue("hypotenuse");
  let angle = getValue("angle");
  let oppAngle = getValue("opposite angle");
  let adjAngle = getValue("adjacent angle");

  let a, b, c, alpha, beta;
 
if (typeof val1 !== "number" || typeof val2 !== "number" || isNaN(val1) || isNaN(val2)) {
    return "Некоректні дані: значення мають бути числами";
  }

  if (val1 <= 0 || val2 <= 0) { return "Значення повинні бути додатними"; }

 if (type1 === "leg" && type2 === "leg") {
  a = val1;
  b = val2;
  c = Math.sqrt(a ** 2 + b ** 2);
  alpha = toDeg(Math.atan(a / b));
  beta = 90 - alpha;
}else if (leg !== null && hyp !== null) {
    if (leg >= hyp) { return "Катет не може бути більшим або рівним гіпотенузі"; }
    a = leg;
    c = hyp;
    b = Math.sqrt(c ** 2 - a ** 2);
    alpha = toDeg(Math.asin(a / c));
    beta = 90 - alpha;
  } else if (leg !== null && oppAngle !== null) {
    if (oppAngle <= 0.0000001 || oppAngle >= 89.9999999) {
      return "К ут має бути гострим (0–90°)";
    }
    a = leg;
    alpha = oppAngle;
    beta = 90 - alpha;
    c = a / Math.sin(toRad(alpha));
    b = a / Math.tan(toRad(alpha));

  } else if (leg !== null && adjAngle !== null) {
    if (adjAngle <= 0.0000001 || adjAngle >= 89.9999999) {
      return "Кут має бути гострим (0–90°)";
    }
    a = leg;
    beta = adjAngle;
    alpha = 90 - beta;
    c = a / Math.sin(toRad(alpha));
    b = a / Math.tan(toRad(alpha));

  } else if (hyp !== null && angle !== null) {
    if (angle <= 0.0000001 || angle >= 89.9999999) {
      return "Кут має бути гострим (0–90°)";
    }
    c = hyp;
    alpha = angle;
    beta = 90 - alpha;
    a = c * Math.sin(toRad(alpha));
    b = c * Math.cos(toRad(alpha));
  } else {
    console.log("failed");
    return "failed";
  }

  console.log("a =", a);
  console.log("b =", b);
  console.log("c =", c);
  console.log("alpha =", alpha);
  console.log("beta =", beta);
  return "success";
}

triangle(3, "leg", 4, "leg");

triangle(4, "leg", 8, "hypotenuse");

triangle(60, "opposite angle", 5, "leg");

triangle(5, "leg", 60, "adjacent angle");

triangle(10, "hypotenuse", 30, "angle");
