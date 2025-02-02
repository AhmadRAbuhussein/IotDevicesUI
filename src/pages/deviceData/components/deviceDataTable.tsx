import { Box } from "@mui/material";
import { Table } from "src/components";
import { GridColDef } from "@mui/x-data-grid";
import Button from "components/button";
import { SearchDeviceDataModel } from "src/types/deviceData";
import { useState } from "react";
import CreateDeviceDataModal from "./createDeviceDataModal";
import { useCreateDeviceDataMutation } from "src/data/devices";

type IProps = {
  data?: Array<SearchDeviceDataModel>;
  isLoading: boolean | undefined;
  deviceId?: string;
};

const DeviceDataTable = ({ data, isLoading, deviceId }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [createDeviceData, createDeviceDataResponse] =
    useCreateDeviceDataMutation();
  const columns: GridColDef[] = [
    {
      field: "temperature",
      headerName: "Temperature",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.temperature}</Box>;
      },
    },
    {
      field: "humidity",
      headerName: "Humidity",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.humidity}</Box>;
      },
    },
    {
      field: "pressure",
      headerName: "Pressure",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.pressure}</Box>;
      },
    },
    {
      field: "timestamp",
      headerName: "timestamp",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.timestamp}</Box>;
      },
    },
  ];
  return (
    <Box>
      {openModal && (
        <CreateDeviceDataModal
          isLoading={createDeviceDataResponse.isLoading}
          onCreate={async (values) => {
            const res = await createDeviceData({
              ...values,
              deviceId: deviceId ?? "",
            });
            if ("data" in res) {
              setOpenModal(false);
            }
          }}
          onClose={() => setOpenModal(false)}
        />
      )}

      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        columnGap={2}
        paddingBottom={"10px"}
      >
        <Button
          title={"Create"}
          customStyle={{ width: "200px" }}
          onClick={() => {
            setOpenModal(true);
          }}
          type={"primary"}
        />
      </Box>
      <Table
        rows={data ?? []} // No need to slice the data since all elements are available
        rowCount={data?.length ?? 0} // Set the rowCount to the total number of rows in the data array
        columns={columns}
        isLoading={isLoading}
        getRowId={(row) => `${row.timestamp}-${row.temperature}-${row.humidity}`}        autoHeight
        customHeader
        paginationMode="client" // Still client-side pagination if you want to paginate on the frontend
        pageSize={50} // You can control how many rows are shown per page
        onPageSizeChange={(pageSize: number) => {
          //   setQueryModel({
          //     ...queryModel,
          //     limit: pageSize, // Update limit only
          //   });
        }}
        onPageChange={(page: number) => {
          // No need for offset anymore; just handle page changes
        }}
      />
    </Box>
  );
};
export default DeviceDataTable;
