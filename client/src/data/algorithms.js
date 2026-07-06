const algorithms = [
  {
    id: 1,
    name: "Binary Search",
    difficulty: "Easy",
    topic: "Searching",
    time: "O(log n)",
    space: "O(1)",
    description:
      "Efficient searching algorithm for sorted arrays using divide and conquer.",
    cpp: `int binarySearch(vector<int>& a,int x){
int l=0,r=a.size()-1;
while(l<=r){
int mid=l+(r-l)/2;
if(a[mid]==x) return mid;
if(a[mid]<x) l=mid+1;
else r=mid-1;
}
return -1;
}`,
    java: `public int binarySearch(int[] arr,int x){
int l=0,r=arr.length-1;
while(l<=r){
int mid=l+(r-l)/2;
if(arr[mid]==x) return mid;
if(arr[mid]<x) l=mid+1;
else r=mid-1;
}
return -1;
}`,
    python: `def binary_search(arr,x):
    l,r=0,len(arr)-1
    while l<=r:
        mid=(l+r)//2
        if arr[mid]==x:
            return mid
        elif arr[mid]<x:
            l=mid+1
        else:
            r=mid-1
    return -1`,
  },

  {
    id: 2,
    name: "Merge Sort",
    difficulty: "Medium",
    topic: "Sorting",
    time: "O(n log n)",
    space: "O(n)",
    description: "Stable divide-and-conquer sorting algorithm.",
    cpp: "// Merge Sort C++",
    java: "// Merge Sort Java",
    python: "# Merge Sort Python",
  },

  {
    id: 3,
    name: "BFS",
    difficulty: "Easy",
    topic: "Graphs",
    time: "O(V+E)",
    space: "O(V)",
    description: "Breadth First Search traverses graph level by level.",
    cpp: "// BFS C++",
    java: "// BFS Java",
    python: "# BFS Python",
  },
];

export default algorithms;
