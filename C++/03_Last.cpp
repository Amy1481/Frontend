#include <bits/stdc++.h>
using namespace std;
// Functions are set of code which performs something for you.They are used to modularise code,increase readability,to use same code multiple times
//  Types of fumctions -
//   void - which doesn't return anything
//  return,
//  parameterised,
//  non-parameterised

void printName()
{ // void is used to identify the functions outsiders don't understand printName is the name of the function and () is the non-parameter
    cout << "Hey students";
}
int main()
{
    printName();

// void printName(string name) It is parameterised function 
// {
//     cout << "Hey " << name;
// }
// int main()
// {
//     string name;
//     cin >> name;
//     printName(name);

// int sum(int num1,int num2){  //It is the return type
//     int num3=num1+num2;
//     return num3;
// }
// int main(){
//     int num1,num2;
//     cin >> num1 >> num2;
//     int res = sum(num1,num2);
//     cout << res;
    return 0;
}