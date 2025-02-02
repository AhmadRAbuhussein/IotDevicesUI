import { Box } from "@mui/material";
import { ButtonComponent, Table } from "src/components";
import { GridColDef } from "@mui/x-data-grid";
import Button from "components/button";
import { useState } from "react";
import { SearchDevicesResponseModel } from "src/types/devices";
import { useCreateDeviceMutation } from "src/data/devices";
import CreateDeviceModal from "./createDeviceModal";
import { useNavigate } from "react-router-dom";

type IProps = {
  data?: Array<SearchDevicesResponseModel>;
  isLoading: boolean | undefined;
};

type modalNames = "NONE" | "Create" | "Update";
const initialState: {
  type: modalNames;
  info?: { title: string; description: number; location: string; id: number };
} = {
  type: "NONE",
  info: { title: "", description: 0, location: "", id: 0 },
};
const DevicesTable = ({ data, isLoading }: IProps) => {
  const [modal, setModal] = useState(initialState);
  const navigate = useNavigate();
  const [createDevice, createDeviceResponse] = useCreateDeviceMutation();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Id",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.id}</Box>;
      },
    },
    {
      field: "title",
      headerName: "Name",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.name}</Box>;
      },
    },
    {
      field: "created_at",
      headerName: "Created At",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.created_at}</Box>;
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      sortable: false,
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <ButtonComponent
              isLoading={false}
              customStyle={{ width: "100%" }}
              title={"Device Data"}
              type={"primary"}
              onClick={() => {
                navigate(`/deviceData/${params.row.id}`);
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <Box>
      {modal.type === "Create" && (
        <CreateDeviceModal
          isLoading={createDeviceResponse.isLoading}
          onCreate={async (values) => {
            const res = await createDevice(values!);
            if ("data" in res) {
              setModal(initialState);
            }
          }}
          onClose={() => setModal(initialState)}
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
          onClick={() => setModal({ type: "Create" })}
          type={"primary"}
        />
      </Box>
      <Table
        rows={data ?? []} // No need to slice the data since all elements are available
        rowCount={data?.length ?? 0} // Set the rowCount to the total number of rows in the data array
        columns={columns}
        isLoading={isLoading}
        autoHeight
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
export default DevicesTable;
