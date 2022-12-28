const baseSlice = (array: unknown[], start: number, end: number) => {
	let index = -1;
	let length = array.length;

	if (start < 0) {
		start = -start > length ? 0 : length + start;
	}
	end = end > length ? length : end;
	if (end < 0) {
		end += length;
	}
	length = start > end ? 0 : (end - start) >>> 0;
	start >>>= 0;

	const result = Array(length);
	while (++index < length) {
		result[index] = array[index + start];
	}
	return result;
};

export const chunk = (array: unknown[], size: number) => {
	const length = array == null ? 0 : array.length;
	if (!length || size < 1) {
		return [];
	}
	let index = 0,
		resIndex = 0;
	const result = Array(Math.ceil(length / size));

	while (index < length) {
		result[resIndex++] = baseSlice(array, index, (index += size));
	}
	return result;
};

export const waitFor = (num: number): Promise<unknown> => {
	return new Promise((resolve) => setTimeout(resolve, num));
};
