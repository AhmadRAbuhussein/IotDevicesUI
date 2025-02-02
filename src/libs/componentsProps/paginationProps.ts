interface PaginationProps {
	limit: number;
	total: number;
	pageSize?: number;
	offset: number;
	onChangePageNumber: (limit: number, offset: number) => void;
	onChangePageSize?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default PaginationProps;
