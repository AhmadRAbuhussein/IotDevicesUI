import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
    GridColDef,
    GridExperimentalFeatures,
    GridSortItem,
    GridFeatureMode,
    GridSelectionModel,
    GridColumnVisibilityModel,
    GridRowParams
} from '@mui/x-data-grid';
interface TableProps {
    columns:Array<GridColDef>
    pageSize:number
    rowsPerPageOptions?:Array<number>
    rows:Array<object>
    checkboxSelection?:boolean
    disableSelectionOnClick?:boolean
    autoHeight?:boolean
    experimentalFeatures?:Partial<GridExperimentalFeatures>
    onPageChange?: (page: number) => void
    onPageSizeChange?: (size: number) => void
    page?: number
    paginationMode?: GridFeatureMode
    rowCount?: number
    sortingMode?: string
    onSortModelChange?: (model:any) => void
    sortModel?: GridSortItem[]
    isLoading?: boolean
    customEmptyOverlayGrid?:()=>ReactJSXElement
    customHeader?: boolean;
    onSelectionModelChange?:(arg:GridSelectionModel)=>void
    selectionModel?:GridSelectionModel
    columnVisibilityModel?: GridColumnVisibilityModel;
    hideFooterPagination?: boolean
    hideFooter?: boolean;
    offset?: number;
    onRowClick?:(params:GridRowParams)=>void
    getRowId?:(row:any)=>void
}
export default TableProps;
