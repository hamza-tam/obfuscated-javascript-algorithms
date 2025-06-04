set terminal png size 800,500 

set yrange[0:8]
set style line 2 lc rgb 'black' lt 1 lw 1
set style data histogram
set style histogram cluster gap 1
set style fill pattern border -1
set boxwidth 0.9
set xtics format ""
set grid ytics

set ylabel "Number of algorithms"

plot 	"data.dat" using 2:xtic(1) title "Detects" ls 2, \
	"data.dat" using 3 title "Explains" ls 2, \
	"data.dat" using 4 title "Recognizes" ls 2, \
	"data.dat" using 5 title "Rewrites" ls 2
