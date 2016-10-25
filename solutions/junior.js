function junior(nums) {
    nums.sort((first, second) => {
        if (first < second) return -1;
        if (second < first) return 1;

        return 0;
    });

    return nums[nums.length - 2];
}