import { Grid } from "@mui/material";
import TableProps from "src/libs/componentsProps/tableProps";
import { StripedDataGrid,StyledOriginalTable, StyledCustomTable} from "src/components/table/style";
import { GridSelectionModel } from "@mui/x-data-grid";

const Table = (props: TableProps) => {
    const {
        columns,
        pageSize,
        rowsPerPageOptions,
        rows,
        checkboxSelection,
        autoHeight,
        experimentalFeatures,
        onPageChange,
        onPageSizeChange,
        paginationMode,
        isLoading,
        sortModel,
        page,
        onSortModelChange,
        rowCount,
        customEmptyOverlayGrid,
        customHeader=true,
        onSelectionModelChange,
        selectionModel,
        columnVisibilityModel,
        hideFooterPagination=false,
        hideFooter=false,
        offset,
        onRowClick,
        getRowId,
    } = props;
    const StyledTable = customHeader ?  StyledCustomTable : StyledOriginalTable;
    return (
        <StyledTable
            container
            direction="row"
            gap={2}

            >
            <Grid

                item container xs={12}>
                <StripedDataGrid
                    pointer={Boolean(onRowClick)}
                    //@ts-ignore
                    getRowId={getRowId}
                   columnVisibilityModel={columnVisibilityModel}
                    onSelectionModelChange={(selectionModel: GridSelectionModel)=>{onSelectionModelChange?.(selectionModel)}}
                    selectionModel={selectionModel}
                    onPageSizeChange={(size: number) => onPageSizeChange?.(size)}
                    onPageChange={(page: number) => onPageChange?.(page)}
                    autoHeight={autoHeight}
                    rows={rows}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={rowsPerPageOptions??[10, 20, 50]}
                    disableSelectionOnClick
                    checkboxSelection={checkboxSelection}
                    experimentalFeatures={experimentalFeatures}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                    // components={{
                    //     ColumnSortedDescendingIcon: UnfoldMoreSharpIcon,
                    //     ColumnSortedAscendingIcon: UnfoldMoreSharpIcon,
                    //     NoRowsOverlay: customEmptyOverlayGrid ?? GridNoRowsOverlay,
                    //     Pagination: () => <Pagination total={rowCount ?? 0} limit={pageSize} offset={offset} onChangePageNumber={(limit: number, offset: number) => onPageChange?.(Math.ceil(offset / limit) ?? 1)} />
                    // }}
                      page={page}
                      getRowHeight={() => 'auto'}
                      paginationMode={paginationMode ?? 'server'}
                      rowCount={rowCount}
                      sortingMode="server"
                      onSortModelChange={(model) => onSortModelChange?.(model)}
                      sortModel={sortModel ?? []}
                      loading={isLoading ?? false}
                      hideFooterPagination={hideFooterPagination}
                      hideFooter={hideFooter}
                   onRowClick={onRowClick}

                />
            </Grid>
        </StyledTable >
    )
};
export default Table;
