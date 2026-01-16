#include <stdio.h>
/*      0  1  2  3  4
input ={1, 2, 3, 4, 5}
output ={3, 4, 5, 1, 2}
*/
void swap(int arr[], int i, int j)
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
int main()
{
    int a[11] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
    int n = 11;
    int k = n / 2;

    int l = 0, r = k - 1;
    while (l < r)
        swap(a, l++, r--);

    l = k;
    r = n - 1;
    while (l < r)
        swap(a, l++, r--);

    l = 0;
    r = n - 1;
    while (l < r)
        swap(a, l++, r--);

        
    for (int i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}