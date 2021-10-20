function confirmDelete(uniqueId, isDeleteClicked) {
    var deleteSpan = 'deleteSpan_' + uniqueId;
    var confirmedDeleteSpan = 'confirmDeleteSpan_' + uniqueId;

    if (isDeleteClicked) {
        $('#' + deleteSpan).hide();
        $('#' + confirmedDeleteSpan).show();
    }
    else {
        $('#' + deleteSpan).show();
        $('#' + confirmedDeleteSpan).hide();
    }
}