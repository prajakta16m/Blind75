//1. Brute force method
var climbStairs = function(n) {
    if(n < 2){
        return 1;
    }
    return climbStairs(n-1) + climbStairs(n-2);
};

//2. Using dp - iterative
var climbStairs = function(n) {
    let dp = [1,1];
    for(let i=2; i<=n;i++){
        dp.push(dp[i-1]+dp[i-2]);
    }
    return dp[n];
};
