const getOffset = (element) => {
	const elementRect = element?.getBoundingClientRect();
	return elementRect?.top;
};

export { getOffset };
