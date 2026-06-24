/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (nums1.length === 0 && nums2.length === 0) return;
    let p1 = m - 1;
    let p2 = n - 1;
    let pMerge = (m + n) - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[pMerge] = nums1[p1];
            p1--;
        } else {
            nums1[pMerge] = nums2[p2];
            p2--;
        }
        pMerge--;
    }
};