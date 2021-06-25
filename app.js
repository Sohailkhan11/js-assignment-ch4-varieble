/*  Declare 3 variables in one statement.*/
var a, x = 5, y = 6, z = 7;
a=x+y+z;
alert(a);

/*  Declare 5 legal & 5 illegal variable names. */

var a =5
var _a=5
var $a=5
var $_a=5
var __a=5
var b

b=a +_a + $a+ $_a +__a
alert(b)

/*know illegal*/
/*
var 1a
var @b
var %c
var -1d
var +e*/

document.write(("<br>")+ ("<br>")+"Variable names can only contain ____a___, ___$a___ and ___name___")
document.write(("<br>")+("<br>")+"For example $my_1stVariable")
document.write(("<br>")+("<br>")+ "Variable names are case sensitive")
document.write(("<br>")+("<br>")+ " Variable names should not be JS keywords ")