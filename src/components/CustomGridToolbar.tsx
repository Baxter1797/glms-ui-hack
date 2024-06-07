import { Box, Button, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import ViewWeekSharpIcon from '@mui/icons-material/ViewWeekSharp';
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';
import LibraryAddSharpIcon from '@mui/icons-material/LibraryAddSharp';
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import CommitSharpIcon from '@mui/icons-material/CommitSharp';

const toolbarMenuButtonProps = {
    horizontal: {
        overrideButton: {
            button: {sx: {color: 'primary.light', padding: '12px', borderRadius: '0px'}}
        },
        customButton: {
            color: 'primary.light', padding: '12px', borderRadius: '0px'
        }
    },
    vertical: {
        overrideButton: {
            button: {sx: {color: 'primary.light', padding: '4px', borderRadius: '0px'}}
        },
        customButton: {
            color: 'primary.light', padding: '4px', borderRadius: '0px'
        }
    }
}



export default function CustomGridToolbar(): JSX.Element {
    const anchorElRef = useRef<null | HTMLElement>(null)
    const [isActionMenuOpen, setIsActionMenuOpen] = useState<boolean>(false)
    const theme = useTheme()
    const isWindowLargerThanMedium = useMediaQuery(theme.breakpoints.up('md'))

    useEffect(() => {
        isActionMenuOpen && setIsActionMenuOpen(false)
    }, [isWindowLargerThanMedium])

    const actionItems: {actionName: string, icon: SvgIconComponent, component: JSX.Element}[] = [
        {actionName: 'Columns', icon: ViewWeekSharpIcon, component: <GridToolbarColumnsButton slotProps={isWindowLargerThanMedium? toolbarMenuButtonProps.horizontal.overrideButton : toolbarMenuButtonProps.vertical.overrideButton} />},
        {actionName: 'Filter', icon: FilterListSharpIcon, component: <GridToolbarFilterButton slotProps={isWindowLargerThanMedium? toolbarMenuButtonProps.horizontal.overrideButton : toolbarMenuButtonProps.vertical.overrideButton} />},
        {actionName: 'Export', icon: SaveAltSharpIcon, component: <GridToolbarExport slotProps={isWindowLargerThanMedium? toolbarMenuButtonProps.horizontal.overrideButton : toolbarMenuButtonProps.vertical.overrideButton}/>},
        {actionName: 'New', icon: LibraryAddSharpIcon, component: <Button component={NavLink} to={'Create'} size="small" startIcon={<LibraryAddSharpIcon/>} sx={ isWindowLargerThanMedium? toolbarMenuButtonProps.horizontal.customButton: toolbarMenuButtonProps.horizontal.customButton }>New</Button>}
    ]

    function handleActionMenuClick(event: React.MouseEvent<HTMLButtonElement>): void {
        anchorElRef.current = event.currentTarget
        setIsActionMenuOpen(true)
    }

    return (
        <GridToolbarContainer sx={{ display: 'inline-flex', padding: '0px' }}>
            <Box flexGrow={1}>
                <GridToolbarQuickFilter sx={{ width:'100%', padding: '0px', '.MuiInput-input': {padding: '0px'} }} inputProps={{ disableUnderline: true, sx: {height: '42px'}, paddingLeft: '12px' }}/>
            </Box>
            <Box>
                { isWindowLargerThanMedium?
                    <>
                    {actionItems.map((action) => (
                        action.component
                    ))}
                    </>
                :
                    <>
                    <Button startIcon={<CommitSharpIcon />} sx={{ color: 'primary.light', padding: '12px', borderRadius: '0px' }} onClick={handleActionMenuClick}>Actions</Button>
                    <Menu sx={{borderRadius: '0px', padding: '0px'}} id='action-menu' anchorEl={anchorElRef.current} open={isActionMenuOpen} onClose={() => setIsActionMenuOpen(false)} transformOrigin={{horizontal: 'right', vertical: 'top'}} anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                        {actionItems.map((action, i) => (
                            <MenuItem key={i}>
                                {action.component}
                            </MenuItem>
                        ))}
                    </Menu>
                    </>
                }
            </Box>
        </GridToolbarContainer>
    )
}