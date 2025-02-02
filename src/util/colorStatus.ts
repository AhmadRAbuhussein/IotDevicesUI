export const ColorStatus=(status:string)=>{
    switch (status) {
        case 'Created':
        case 'PendingReview':
            return '#e88c02'
        case 'Active':
            return '#f2d10c'
        case 'Delivered':
            return '#0047AB'
        case 'Accepted':
            return '#50C878'
        case 'Purchased':
            return   '#702963'
        case 'Assigned':
            return '#b1b1b1'
        case 'Rejected':
        case 'Canceled':
            return '#D22B2B'

        default:
            return 'black'
    }

}
