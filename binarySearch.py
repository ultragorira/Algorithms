def binary_search(arr, target):
    
    #get first index of array
    left = 0
    #get last index of array
    right = len(arr) - 1
    while left <= right:
        #Find mid pointer
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif target < arr[mid]:
            right = mid-1
        else:
            left = mid + 1
    return - 1

target = 11
array_to_search = [4, 5, 7, 9, 10, 11, 34, 45, 56, 67]

find_value = binary_search(array_to_search, target) 
print(find_value)